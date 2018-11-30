using BeerProduction.DAL.Models;
using BeerProduction.DAL.Repos;

namespace BeerProduction.DAL
{
    public class UnitofWork
    {
        private readonly Context _dbContext;
        public TestClassRepo<TestClass> TestClassRepos { get; set; }
        public TemperatureRepo<Temperature> TemperatureRepos { get; set; }
        public VibrationRepo<Vibration> VibrationRepos { get; set; }
        public HumidityRepo<Humidity> HumidityRepos { get; set; }
        public NextProductAmountRepo<NextProductAmount> NextProductAmountRepos { get; set; }
        public NextProductIDRepo<NextProductID> NextProductIDRepos { get; set; }
        public NextBatchIDRepo<NextBatchID> NextBatchIDRepos { get; set; }
        public MachineSpeedRepo<MachineSpeed> MachineSpeedRepos { get; set; }
        public ProductProcessedRepo<ProductProcessed> ProductProcessedRepos { get; set; }
        public UnitofWork()
        {
        _dbContext = Context.Create();
        TestClassRepos = new TestClassRepo<TestClass>(_dbContext);
        TemperatureRepos = new TemperatureRepo<Temperature>(_dbContext);
        VibrationRepos = new VibrationRepo<Vibration>(_dbContext);
        HumidityRepos = new HumidityRepo<Humidity>(_dbContext);
        NextProductAmountRepos = new NextProductAmountRepo<NextProductAmount>(_dbContext);
        NextProductIDRepos = new NextProductIDRepo<NextProductID>(_dbContext);
        NextBatchIDRepos = new NextBatchIDRepo<NextBatchID>(_dbContext);
        MachineSpeedRepos = new MachineSpeedRepo<MachineSpeed>(_dbContext);
        ProductProcessedRepos = new ProductProcessedRepo<ProductProcessed>(_dbContext);



        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
    
}