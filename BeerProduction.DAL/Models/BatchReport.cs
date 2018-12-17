using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;

namespace BeerProduction.DAL.Models
{
    public class BatchReport
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        internal static UnitofWork _uow = new UnitofWork();

        public int Id { get; set; }
        public DateTime startDateTime { get; set; }
        public int AmountToProduce { get; set; }
        public int Speed { get; set; }
        public int BeerType { get; set; }

        public int? stopReason { get; set; }
        public DateTime? stopDateTime { get; set; }
        public int? AmountProduced { get; set; }
        public int? AcceptableAmount { get; set; }
        public int? UnacceptableAmount { get; set; }
        public int? OEE { get; set; }
        public TimeSpan? TimeTaken{ get => stopDateTime - startDateTime; }


        public List<Temperature> GetBatchTemps()
        {
            List<Temperature> temps= _uow.TemperatureRepos.Search(x => x.BatchReportId == Id).ToList();
            return temps;
        }
        public List<Humidity> GetBatchHumidity()
        {
            List<Humidity> Humidity = _uow.HumidityRepos.Search(x => x.BatchReportId == Id).ToList();
            return Humidity;
        }
        public List<MachineSpeed> GetBatchMachineSpeed()
        {
            List<MachineSpeed> MachineSpeed = _uow.MachineSpeedRepos.Search(x => x.BatchReportId == Id).ToList();
            return MachineSpeed;
        }

        public List<State> GetBatchStates()
        {
            List<State> States = _uow.StateRepos.Search(x => x.BatchReportId == Id).ToList();
                return States;
        }
        public int calculateOEE()
        {
            double maxSpeed = 0;
            switch (this.BeerType)
            {
                case 0:
                    maxSpeed = 600;
                    break;
                case 1:
                    maxSpeed = 300;
                    break;
                case 2:
                    maxSpeed = 150;
                    break;
                case 3:
                    maxSpeed = 200;
                    break;
                case 4:
                    maxSpeed = 100;
                    break;
                case 5:
                    maxSpeed = 125;
                    break;

            }
            double tempOEE = Math.Round(1 * (maxSpeed / Speed) * ((double)AcceptableAmount / AmountToProduce), 2);
            return (int)tempOEE * 100;
        }
    }
}