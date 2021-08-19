using DAL.Context;
using DAL.Entities;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class CustomerRepository : ICustomerRepository<Customer>
    {
        private readonly DatabaseContext _context;

        public CustomerRepository(DatabaseContext context)
        {
            _context = context;
        }

        public void AddCustomer(Customer customer)
        {
            if (customer != null)
            {
                _context.Customers.Add(customer);
                _context.SaveChanges();
            } 
            else throw new NullReferenceException("ERROR : Customer null");
        }

        public void DeleteCustomer(int customerId)
        {
            if (customerId != 0)
            {
                Customer someCustomer = _context.Customers.FirstOrDefault(p => p.Id == customerId);
                if (someCustomer != null)
                {
                    _context.Entry(someCustomer).State = EntityState.Deleted;
                    _context.SaveChanges();
                }
                else throw new NullReferenceException($"ERROR : No id = {customerId}");
            }
            else throw new NullReferenceException("ERROR : No id = 0");
        }

        public List<Customer> ShowCustomerList()
        {
            List<Customer> someCustomers = _context.Customers.ToList();
            if (someCustomers != null)
            {
                return someCustomers;
            }
            else throw new NullReferenceException("ERROR : No Customers");
        }

        public void UpdateCustomer(Customer customer)
        {
            if (customer != null)
            {
                Customer someCustomer = _context.Customers.FirstOrDefault(p => p.Id == customer.Id);
                if (someCustomer != null)
                {
                    someCustomer.Age = customer.Age;
                    someCustomer.Email = customer.Email;
                    someCustomer.Position = customer.Position;
                    _context.Entry(someCustomer).State = EntityState.Modified;
                    _context.SaveChanges();
                }
                else throw new NullReferenceException($"ERROR : No user with id = {customer.Id}");
            }
            else throw new NullReferenceException("ERROR : No user");
        }

        public Customer GetCustomerById(int customerId)
        {
            if (customerId != 0)
            {
                Customer someCustomer = _context.Customers.FirstOrDefault(p => p.Id == customerId);
                if (someCustomer != null)
                {
                    return someCustomer;
                }
                else throw new NullReferenceException($"ERROR : No id = {customerId}");
            }
            else throw new NullReferenceException("ERROR : No id = 0");
        }
    }
}
