import React from 'react'

export const Tabel = () => {
  return (
    <div className="container-fluid">
      <div className='body'>
        <div className="list-product mt-5 ">
        <h2 className="text-center">List Product</h2>
        {/* table */}
        <table className="table table-striped" style={{ width: 900 }}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Desciption</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody id="list">
            <tr>
              <th scope="row">1,001</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Brand new</td>
              <td>adipiscing</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">1,002</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Second Hand</td>
              <td>adipiscing</td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">1,003</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Brand new</td>
              <td>adipiscing</td>
              <td>20</td>
            </tr>
            <tr>
              <th scope="row">1,004</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Refushed</td>
              <td>adipiscing</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
        {/* search */}
        <form role="search">
          <div className="row">
            <div className="col-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Product Name"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="button mt-3 mb-3" >
            <button className="btn btn-primary position-relative" type="button">
              Deletion
            </button>
            <button
              className="btn btn-outline-primary position-absolute"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
