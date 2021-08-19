using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface ICustomerService
    {
        void AddCustomer(CustomerDTO customerDTO);

        void DeleteCustomer(int customerId);

        List<CustomerDTO> ShowCustomerList();

        void UpdateCustomer(CustomerDTO customerDTO);

        CustomerDTO GetCustomerById(int customerId);
    }
}
