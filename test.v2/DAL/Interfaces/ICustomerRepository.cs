using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface ICustomerRepository<T> where T : class
    {
        void AddCustomer(T t);

        void DeleteCustomer(int CustomerId);

        List<T> ShowCustomerList();

        void UpdateCustomer(T t);

        T GetCustomerById(int customerId);
    }
}
