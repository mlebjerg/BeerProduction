
using System;
using BeerProduction.OPC;
using WebApplication1.Models;

namespace Serene1.AdminLTE
{
    using Serenity.Web;
    using System.Web.Mvc;
    using BeerProduction.OPC;

    [Authorize, RoutePrefix("Dashboard"), Route("{action=index}")]
    public class AdminLTEController : Controller
    {
        private OpcStart opc;

        [Authorize, HttpGet, Route("~/")]
        public ActionResult DashboardV2()
        {
            return View(MVC.Views.AdminLTE.DashboardV2);
        }

        public ActionResult Widgets()
        {
            return View(MVC.Views.AdminLTE.Widgets);
        }

        public ActionResult Calendar()
        {
            return View(MVC.Views.AdminLTE.Calendar);
        }

        [HttpGet]
        public ActionResult GetProduced()
        {
            try
            {
                return Json(new { success = true, produced = Opc.Instance.Programproductproduced, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetNextBatchID()
        {
            try
            {
                return Json(new { success = true, nextBatchID = OpcStart.nextBatchID, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetNextProductID()
        {
            try
            {
                return Json(new { success = true, nextProductID = OpcStart.nextProductID, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetNextProductAmount()
        {
            try
            {
                return Json(new { success = true, nextProductAmount = OpcStart.nextProductAmount, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetHumidity()
        {
            try
            {
                return Json(new { success = true, humidity = OpcStart.humidity, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetTemperature()
        {
            try
            {
                return Json(new { success = true, temperature = OpcStart.temperature, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetVibration()
        {
            try
            {
                return Json(new { success = true, vibration = OpcStart.vibration, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetMalt()
        {
            try
            {
                return Json(new { success = true, malt = OpcStart.maltPercentage, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetHops()
        {
            try
            {
                return Json(new { success = true, hops = OpcStart.hopsPercentage, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetBarley()
        {
            try
            {
                return Json(new { success = true, barley = OpcStart.barleyPercentage, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetWheat()
        {
            try
            {
                return Json(new { success = true, wheat = OpcStart.wheatPercentage, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetYeast()
        {
            try
            {
                return Json(new { success = true, yeast = OpcStart.yeastPercentage, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetMachinespeed()
        {
            try
            {
                return Json(new { success = true, machinespeed = OpcStart.machinespeed, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ActionBtnClick(int data)
        {
            try
            {
                OpcStart.Instance.SetCntrlCmd(data);
                return Json(new { success = true, responseText = "success" },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { success = false, responseText = "Getting TimeRegs Failed" },
                    JsonRequestBehavior.AllowGet);
            }
        }


        public void PilsnerOptimize()
        {
            for (int i = 1; i <= 10; i++)
            {
                Pilsner b = new Pilsner();
                b.Speed = (i / 10) * Pilsner.MaxSpeed;

                OpcStart.Instance.SetCntrlCmd(Buttons.ABORT);
                System.Threading.SpinWait.SpinUntil(() => OpcStart.CmdCntrl == Buttons.ABORT);

                OpcStart.Instance.SetCmdChangeRequest(true);


                System.Threading.SpinWait.SpinUntil(() => OpcStart.State == States.Aborted);
                OpcStart.Instance.SetCntrlCmd(Buttons.CLEAR);
                OpcStart.Instance.SetCmdChangeRequest(true);

                System.Threading.SpinWait.SpinUntil(() => OpcStart.State == States.Stopped);
                OpcStart.Instance.SetCntrlCmd(Buttons.RESET);
                OpcStart.Instance.SetCmdChangeRequest(true);

                System.Threading.SpinWait.SpinUntil(() => OpcStart.State == States.Idle);

                OpcStart.Instance.SetNextProductAmount(100);
                OpcStart.Instance.SetNextProductID(Pilsner.BeerOpcCmd);
                OpcStart.Instance.SetMachSpeed(b.Speed);

                System.Threading.SpinWait.SpinUntil(() => OpcStart.machinespeed == b.Speed && OpcStart.nextProductAmount == 100 && OpcStart.nextProductID == Pilsner.BeerOpcCmd);
                OpcStart.Instance.SetCntrlCmd(Buttons.START);
                OpcStart.Instance.SetCmdChangeRequest(true);

            }
        }
    }
 }
