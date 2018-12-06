using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerProduction.DAL.Models
{
    public class SetControlCommand
    {
        [Key]
        public int Id { get; set; }
        public Int32 Value { get; set; }
        public DateTime DateTime { get; set; }

    }
}
