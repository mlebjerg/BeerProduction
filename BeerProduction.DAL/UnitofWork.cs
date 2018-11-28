using BeerProduction.DAL.Models;
using BeerProduction.DAL.Repos;

namespace BeerProduction.DAL
{
    public class UnitofWork
    {
        private readonly Context _dbContext;
        public TestClassRepo<TestClass> TestClassRepos { get; set; }
        public TemperatureRepo<Temperature> TemperatureRepos { get; set; }

        public UnitofWork()
        {
        _dbContext = Context.Create();
        TestClassRepos = new TestClassRepo<TestClass>(_dbContext);
        TemperatureRepos = new TemperatureRepo<Temperature>(_dbContext);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
    
}