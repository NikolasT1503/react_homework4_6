import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [
        { fam: "Иванов", im: "Иван", days: 20, tariff: 1500, sum: 0 },
        { fam: "Петров", im: "Петр", days: 10, tariff: 1200, sum: 0 },
        { fam: "Сидоров", im: "Сидор", days: 23, tariff: 1900, sum: 0 },
        { fam: "Николаев", im: "Николай", days: 15, tariff: 1600.5, sum: 0 },
        { fam: "Александров", im: "Александр", days: 18, tariff: 1500, sum: 0 },
        { fam: "Матвеев", im: "Матвей", days: 17, tariff: 1400, sum: 0 },
        { fam: "Сергеев", im: "Сергей", days: 21, tariff: 17500, sum: 0 },
      ],
      resultSum: 0,
    };
    let sum=0; 

    this.setState({
      workers: this.state.workers.map((worker) => {
        return (worker.sum = worker.days * worker.tariff);
      }),
      resultSum: this.state.workers.forEach((worker) => {
        console.log(sum)
        return sum += worker.sum}) 
    });
  }

  handlerDaysChange = (fam, im, event) => {
    const works = this.state.workers.concat();
    const worker = works.find((w) => w.fam === fam && w.im === im);
    worker.days = event.target.value;
    worker.sum = worker.days * worker.tariff;
    let resSum = 0;
    works.forEach((w) => (resSum += w.sum));

    this.setState({ workers: works, resultSum: resSum });
  };

  handlerTariffChange = (fam, im, event) => {
    const works = this.state.workers.concat();
    const worker = works.find((w) => w.fam === fam && w.im === im);
    worker.tariff = event.target.value;
    worker.sum = worker.days * worker.tariff;
    let resSum = 0;
    works.forEach((w) => (resSum += w.sum));

    this.setState({ workers: works, resultSum: resSum });
  };

  render() {
    return (
      <div className="App">
        <TableContainer component={Paper}>
          <Table
            className="minWidth: 650"
            size="medium"
            aria-label="Таблица работников"
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Фамилия</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Количество дней</TableCell>
                <TableCell>Ставка</TableCell>
                <TableCell>Итого</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.workers.map((row, i) => (
                <TableRow key={i + row.fam + row.im}>
                  <TableCell>{i+1}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.fam}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.im}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <input
                      type="text"
                      value={row.days.toString()}
                      onChange={(e) => this.handlerDaysChange(row.fam, row.im, e)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <input
                      type="text"
                      value={row.tariff.toString()}
                      onChange={(e) => this.handlerTariffChange(row.fam, row.im, e)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.sum}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5} align="right">
                  Всего:
                </TableCell>
                <TableCell>{this.state.resultSum}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default App;
