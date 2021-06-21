import React from 'react';

const OrderSummary = () => {
  return (
    <div>
      <h2 className="text-primary py-3">Order Summary</h2>
      <table class="table table-hover table-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>01700022222</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>01700022222</td>
            <td>umarsunu@yahoo.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>kumarsunu</td>
            <td>01700022222</td>
            <td>kumarsunu@yahoo.com</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>abdulla</td>
            <td>01700022222</td>
            <td>abdulla@fat</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>hero</td>
            <td>01700022222</td>
            <td>hero@fat</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;