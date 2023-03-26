import Table from "react-bootstrap/Table"

export default function TicketInfo() {

  return <div className="TicketInfo p-5">
    <h1>Ticket Info</h1>
    <p>We have different ticket types for different age groups</p>
    <p>Here you can find some information about our ticket types.</p>
    <Table striped bordered hover variant="light" style={{ maxWidth : "80%" }} className="mx-auto">
      <thead>
        <tr>
          <th scope="col">Ticket Name</th>
          <th scope="col">Age Group</th>
          <th scope="col">Ticket Price</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adult</td>
          <td>12 - 65</td>
          <td>85 SEK</td>
        </tr>
        <tr>
          <td>Senior</td>
          <td>above 65</td>
          <td>75 SEK</td>
        </tr>
        <tr>
          <td>Child</td>
          <td>under 12</td>
          <td>65 SEK</td>
          </tr>
      </tbody>
    </Table>
</div>
}