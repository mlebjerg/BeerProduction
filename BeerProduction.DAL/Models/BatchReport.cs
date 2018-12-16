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
        public int? OEE { get; set; }
        public TimeSpan? TimeTaken{ get => stopDateTime - startDateTime; }


        public List<Temperature> GetBatchTemps()
        {

            List<Temperature> temps= _uow.TemperatureRepos.Search(x => x.DateTime >= startDateTime).ToList();

            return temps;
        }

    }
}