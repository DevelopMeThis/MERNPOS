import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3F51B5',
    color: theme.palette.common.white,
  },
  body: { 
    fontSize: 14,
  },
}))(TableCell);



Charts(FusionCharts);

var myDataSource = {
  chart: {
    caption: 'The Filli',
    subCaption: 'Profit and loss by days',
    numberPrefix: 'Rs.',
  },
  data: [
    {
      label: 'PROFIT',
      value: '',
    },
    {
      label: 'TOTAL SALES',
      value: '',
    },
   
  ]
};

const chartConfigs = {
  type: 'pie2d',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: myDataSource,
};

export default class extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      t:this.props.token,
      data:[]
    };


  }

  oneDay = () => {
    var details = {
      'token':this.state.t,
      'noofdays':1
  };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/admin/showstats2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      console.log("we are in this function");
      if(res){
        myDataSource.data[0].value=res.profit;
        myDataSource.data[1].value=res.totalsale;
        this.forceUpdate();
      };
    }
    );

    var details2 = {
      'token':this.state.t,
      'noofdays':1
  };
    var formBody = [];
    for (var property in details2) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/admin/showCustomSales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      console.log("we are in this function");
      if(res){
        this.setState({
          data:res
        });
      };
    }
    );
  }

  threeDay = () => {
    var details = {
      'token':this.state.t,
      'noofdays':3
  };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/admin/showstats2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      console.log("we are in this function");
      console.log(this.state.t);
      console.log(res);
      if(res){
          
        myDataSource.data[0].value=res.profit;
        myDataSource.data[1].value=res.totalsale;
        this.forceUpdate();
      };
    }
    );
    console.log(myDataSource.data)
    var details2 = {
      'token':this.state.t,
      'noofdays':3
  };
    var formBody = [];
    for (var property in details2) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/admin/showCustomSales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      console.log("we are in this function");
      if(res){
        this.setState({
          data:res
        });
      };
    }
    );
  }
  tenDay = () => {
    var details = {
      'token':this.state.t,
      'noofdays':10
  };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/admin/showstats2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      console.log("we are in this function");
      console.log(this.state.t);
      console.log(res);
      if(res){
        myDataSource.data[0].value=res.profit;
        myDataSource.data[1].value=res.totalsale;
        this.forceUpdate();
      };
    }
    );
    console.log(myDataSource.data)
    var details2 = {
      'token':this.state.t,
      'noofdays':10
  };
    var formBody = [];
    for (var property in details2) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/admin/showCustomSales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      console.log("we are in this function");
      if(res){
        this.setState({
          data:res
        });
      };
    }
    );
  }
    render() {
        return(
            <div>
              <Button variant="raised" onClick={this.oneDay.bind(this)}>1 Day</Button>
              <Button variant="raised" onClick={this.threeDay}>3 Day</Button>
              <Button variant="raised" onClick={this.tenDay}>10 Day</Button>
            <ReactFC {...chartConfigs}/>

             <div>
                <Typography variant="display2"> Sales</Typography>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <CustomTableCell >Sold By</CustomTableCell>
                        <CustomTableCell numeric>On Date</CustomTableCell>
                        <CustomTableCell numeric>Total Bill</CustomTableCell>
                        <CustomTableCell numeric >Item Name</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        Object.values(this.state.data).map((type,index) => {
                          return (
                              <TableRow  key={index}>
                                <CustomTableCell >{type.Emp_Cnic}</CustomTableCell>
                                <CustomTableCell numeric> Date  :  {type.date_sale.split("T",1)}      Time :{(type.date_sale.split(/[T]/)).pop().substr(0,7)}</CustomTableCell>
                                <CustomTableCell numeric>{type.total}</CustomTableCell>
                                <CustomTableCell numeric>
                                  {
                                    type.products.map((item)=>{
                                      return(item.item_name)+","
                                    })
                                    }
                                  </CustomTableCell>
                              </TableRow>
                          );
                        })
                      }
                    </TableBody>
                  </Table>
                </Paper>
                </div>
              </div>
        )
    }
}