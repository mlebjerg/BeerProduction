using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Modules.AdminLTE.UIElements
{
    public class BatchReport
    {
        private Int32 BatchID { get; }
        private Int32 AmountToProduce { get; }
        private Int32 AmountProduced { get; }
        private Int32 AcceptableAmount { get; }
        private Int16 Speed { get; }
        private String Type { get; }

        public BatchReport(Int32 batchId, Int32 amountToProduce, Int32 amountProduced, Int32 acceptableAmount, Int16 speed, String type)
        {
            BatchID = batchId;
            AmountToProduce = amountToProduce;
            AmountProduced = amountProduced;
            AcceptableAmount = acceptableAmount;
            Speed = speed;
            Type = type;
        }
    }
}