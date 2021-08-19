using BLL.DTO;
using BLL.Interfaces;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using test.v2.Models;

namespace test.v2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICustomerService _customerService;

        public HomeController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        public IActionResult Index()
        {
            try
            {
                return View(_customerService.ShowCustomerList());
            }
            catch (ValidationException e)
            {
                return NotFound(e.Message);
            }
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Update(int id)
        {
            return View(_customerService.GetCustomerById(id));
        }

        [HttpPost]
        public IActionResult Update(CustomerDTO customerDTO)
        { 
            _customerService.UpdateCustomer(customerDTO);
            return RedirectToAction("Index");
        }

        public IActionResult Delete(int id)
        {
            try
            {
                _customerService.DeleteCustomer(id);
                return RedirectToAction("Index");
            }
            catch (ValidationException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Create(CustomerDTO customerDTO)
        {
            try
            {
                _customerService.AddCustomer(customerDTO);
                return RedirectToAction("Index");
            }
            catch (ValidationException e)
            {
                return NotFound(e.Message);
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
