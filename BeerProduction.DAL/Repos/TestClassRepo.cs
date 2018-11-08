using BeerProduction.DAL.Repos;

namespace BeerProduction.DAL.Repos
{
    public class TestClassRepo<T>: BaseRepository<T> where T : class
    {
        public TestClassRepo(Context context) : base(context)
        {
        }
    }
}