using AdminProduct.Model;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AdminProduct.Repository.ProductRepository
{
    public class ProductDetailRepository : IProductDetailRepository
    {
        string path = "";
        public ProductDetailRepository()
        {
            path = Directory.GetCurrentDirectory() + @"\ClientApp\src\assets" + @"\ProductDetail.json";
        }

        /// <summary>
        /// Get all product details
        /// </summary>
        /// <returns>count of products</returns>
        public List<ProductDetail> GetAllProductDetail()
        {
            List<ProductDetail> productDetails = new List<ProductDetail>();
            using (StreamReader r = new StreamReader(path))
            {
                string json = r.ReadToEnd();
                productDetails = JsonConvert.DeserializeObject<List<ProductDetail>>(json);
            }
            return productDetails.ToList();
        }

        /// <summary>
        /// Get product details by given id
        /// <param name="id">id of product detail </param>
        /// </summary>
        /// <returns>product details for given id</returns>
        public ProductDetail GetProductDetailById(int id)
        {
            List<ProductDetail> productDetails = GetAllProductDetail();
            ProductDetail productDetail = productDetails.Where(a => a.Id == id).FirstOrDefault();
            return productDetail;
        }

        /// <summary>
        /// Delete product details 
        /// <param name="id">id of delete product detail </param>
        /// </summary>
        /// <returns>Task</returns>
        public bool AddProductDetail(ProductDetail productDetail)
        {
            try
            {
                List<ProductDetail> productDetailList = GetAllProductDetail();
                int id = 1;
                if (productDetailList.Count > 0)
                {
                    id = productDetailList.Last().Id;
                    id++;
                }

                productDetail.Id = id;
                productDetailList.Add(productDetail);
                string productData = JsonConvert.SerializeObject(productDetailList);

                System.IO.File.WriteAllText(path, productData);
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        /// <summary>
        /// Update product details 
        /// <param name="model">updated product detail </param>
        /// </summary>
        /// <returns>Task</returns>
        public bool UpdateProductDetail(ProductDetail productDetail)
        {
            try
            {
                List<ProductDetail> productDetailList = GetAllProductDetail();
                productDetailList[productDetailList.FindIndex(ind => ind.Id == productDetail.Id)] = productDetail;

                string productData = JsonConvert.SerializeObject(productDetailList);
                System.IO.File.WriteAllText(path, productData);
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        /// <summary>
        /// Add new product details 
        /// <param name="model">product detail saved in database</param>
        /// </summary>
        /// <returns>Task</returns>
        public bool DeleteProductDetail(int id)
        {
            try
            {
                List<ProductDetail> productDetailList = GetAllProductDetail();
                ProductDetail productDetail = productDetailList.Where(a => a.Id == id).FirstOrDefault();
                bool isDeleted = productDetailList.Remove(productDetail);
                string productData = JsonConvert.SerializeObject(productDetailList);
                System.IO.File.WriteAllText(path, productData);
                return isDeleted;
            }
            catch (Exception e)
            {
                throw e;
            }
        }


    }
}
