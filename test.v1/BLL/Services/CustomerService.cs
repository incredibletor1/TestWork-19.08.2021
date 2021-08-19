using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CustomerService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void AddCustomer(CustomerDTO customerDTO)
        {
            Customer someCustomer = AutoMapperService<CustomerDTO, Customer>.Mapper(customerDTO);
            _unitOfWork.Customers.AddCustomer(someCustomer);
        }

        public void DeleteCustomer(int customerId)
        {
            _unitOfWork.Customers.DeleteCustomer(customerId);
        }

        public List<CustomerDTO> ShowCustomerList()
        {
            return AutoMapperService<Customer, CustomerDTO>.MapperList(_unitOfWork.Customers.ShowCustomerList());
        }

        public void UpdateCustomer(CustomerDTO customerDTO)
        {
            Customer someCustomer = AutoMapperService<CustomerDTO, Customer>.Mapper(customerDTO);
            _unitOfWork.Customers.UpdateCustomer(someCustomer);
        }
    }
}
