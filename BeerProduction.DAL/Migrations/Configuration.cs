using System.Data.Entity.Migrations;
using BeerProduction.DAL;


namespace BeerProduction.DAL.Migrations
{
    public class Configuration : DbMigrationsConfiguration<Context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }
    }
}