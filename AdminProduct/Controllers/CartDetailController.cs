using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AdminProduct.Model;
using AdminProduct.Repository.CartRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AdminProduct
{
    [Route("api/[controller]")]
    public class CartDetailController : Controller
    {
        public ICartDetailRepository _CartDetailRepository;

        public CartDetailController(ICartDetailRepository CartDetailRepository)
        {
            _CartDetailRepository = CartDetailRepository;
        }


        /// <summary>
        /// Get Cart details by given id
        /// <param name="id">id of Cart detail </param>
        /// </summary>
        /// <returns>Cart details for given id</returns>
        [HttpPost]
        [Route("GetCartDetail")]
        public List<CartDetail> GetCartDetail([FromBody] int id)
        {
            return _CartDetailRepository.GetCartDetail(id);
        }

        /// <summary>
        /// Add new Cart details 
        /// <param name="model">Cart detail saved in database</param>
        /// </summary>
        /// <returns>Task</returns>
        [HttpPost]
        [Route("AddCartDetail")]
        public bool AddCartDetail([FromBody] CartDetail CartDetail)
        {
            return _CartDetailRepository.AddCartDetail(CartDetail);
        }

        /// <summary>
        /// Update Cart details 
        /// <param name="model">updated Cart detail </param>
        /// </summary>
        /// <returns>Task</returns>
        [HttpPost]
        [Route("UpdateCartDetail")]
        public bool UpdateCartDetail([FromBody] CartDetail CartDetail)
        {
            return _CartDetailRepository.UpdateCartDetail(CartDetail);

        }

        /// <summary>
        /// Delete Cart details 
        /// <param name="id">id of delete Cart detail </param>
        /// </summary>
        /// <returns>Task</returns>
        [HttpPost]
        [Route("DeleteCartDetail")]
        public bool DeleteCartDetail([FromBody] int id)
        {
            return _CartDetailRepository.DeleteCartDetail(id);
        }

    }
}
