using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeerProduction.DAL.Models
{
    public class Vibration
    {
        [Key]
        public int Id { get; set; }
        public float Value { get; set; }
        public DateTime DateTime { get; set; }
    }
}
