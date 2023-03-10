import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      method: "Cash on delivery",
      status: "Pending",
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      method: "Card",
      status: "Approved",
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      method: "Online",
      status: "Approved",
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      method: "Card",
      status: "Approved",
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      method: "Cash on delivery",
      status: "Pending",
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      method: "Online",
      status: "Pending",
      brand: "APPle",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      method: "Cash on delivery",
      status: "Approved",
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      method: "Card",
      status: "Pending",
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      method: "Online",
      status: "Pending",
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      description:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      method: "Card",
      status: "Approved",
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      images: [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      ],
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Price ($)</TableCell>
            <TableCell className="tableCell">Brand</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img className="image" src={row.images[0]} alt="productImg" />
                  {row.title}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.brand}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
