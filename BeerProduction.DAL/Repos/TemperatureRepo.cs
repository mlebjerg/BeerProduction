using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerProduction.DAL.Repos
{
    public class TemperatureRepo<T> : BaseRepository<T> where T : class
    {
        public TemperatureRepo(Context context) : base(context)
        {

        }
    }

    public class VibrationRepo<T> : BaseRepository<T> where T : class
    {
        public VibrationRepo(Context context) : base(context)
        {

        }
    }

    public class HumidityRepo<T> : BaseRepository<T> where T : class
    {
        public HumidityRepo(Context context) : base(context)
        {

        }
    }

    public class NextProductAmountRepo<T> : BaseRepository<T> where T : class
    {
        public NextProductAmountRepo(Context context) : base(context)
        {

        }
    }

    public class NextProductIDRepo<T> : BaseRepository<T> where T : class
    {
        public NextProductIDRepo(Context context) : base(context)
        {

        }
    }

    public class NextBatchIDRepo<T> : BaseRepository<T> where T : class
    {
        public NextBatchIDRepo(Context context) : base(context)
        {

        }
    }

    public class MachineSpeedRepo<T> : BaseRepository<T> where T : class
    {
        public MachineSpeedRepo(Context context) : base(context)
        {

        }
    }

    public class ProductProcessedRepo<T> : BaseRepository<T> where T : class
    {
        public ProductProcessedRepo(Context context) : base(context)
        {

        }
    }
    
}
