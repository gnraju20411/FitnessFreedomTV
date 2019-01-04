// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace FitnessFreedomTV.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        [HttpGet]
        public JsonResult GetImages()
        {
            string[] images = new string[]
            {
                "temp.jpeg",
                "temp1.jpeg"
            };

            return Json(images);
        }

        [HttpPost]
        public JsonResult UpdateImage(string image)
        {
            image = "temp.jpeg";

            return Json(image);
        }
    }
}
