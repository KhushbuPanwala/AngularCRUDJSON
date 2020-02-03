using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AdminProduct.Model;
using AdminProduct.Repository.ProductRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AdminProduct
{
    [Route("api/[controller]")]
    public class ProductDetailController : Controller
    {
        public IProductDetailRepository _productDetailRepository;

        public ProductDetailController(IProductDetailRepository productDetailRepository)
        {
            _productDetailRepository = productDetailRepository;
        }

        /// <summary>
        /// Get all product details
        /// </summary>
        /// <returns>list of product details</returns>
        [HttpGet]
        [Route("GetAllProductDetail")]
        public List<ProductDetail> GetAllProductDetail()
        {
            return _productDetailRepository.GetAllProductDetail();
        }

        /// <summary>
        /// Get product details by given id
        /// <param name="id">id of product detail </param>
        /// </summary>
        /// <returns>product details for given id</returns>
        [HttpPost]
        [Route("GetProductDetailById")]
        public ProductDetail GetProductDetailById([FromBody] int id)
        {
            return _productDetailRepository.GetProductDetailById(id);
        }

        /// <summary>
        /// Add new product details 
        /// <param name="model">product detail saved in database</param>
        /// </summary>
        /// <returns>Task</returns>
        [HttpPost]
        [Route("AddProductDetail")]
        public bool AddProductDetail([FromBody] ProductDetail productDetail)
        {
            return _productDetailRepository.AddProductDetail(productDetail);
        }

        /// <summary>
        /// Update product details 
        /// <param name="model">updated product detail </param>
        /// </summary>
        /// <returns>Task</returns>
        [HttpPost]
        [Route("UpdateProductDetail")]
        public bool UpdateProductDetail([FromBody] ProductDetail productDetail)
        {
            return _productDetailRepository.UpdateProductDetail(productDetail);

        }

        /// <summary>
        /// Delete product details 
        /// <param name="id">id of delete product detail </param>
        /// </summary>
        /// <returns>Task</returns>
        [HttpPost]
        [Route("DeleteProductDetail")]
        public bool DeleteProductDetail([FromBody] int id)
        {
            return _productDetailRepository.DeleteProductDetail(id);
        }

        /// <summary>
        /// Upload product image
        /// <param name="id">id of delete product detail </param>
        /// </summary>
        /// <returns>Task</returns>
        [HttpPost]
        [Route("UploadProductImage")]
        public ActionResult UploadProductImage()
        {
            try
            {

                var file = Request.Form.Files[0];
                string path = Directory.GetCurrentDirectory() + @"\ClientApp\src\assets";
                string fileName = file.FileName;
                if (file.Length > 0)
                {
                    var fullPath = Path.Combine(path, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return Json(fileName);
                }
                else
                {
                    return Json("");
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
