import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import Button from 'material-ui/Button';

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
    console.log(myDataSource.data)
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
  }
    render() {
        return(
            <div>
              <Button variant="raised" onClick={this.oneDay.bind(this)}>1 Day</Button>
              <Button variant="raised" onClick={this.threeDay}>3 Day</Button>
              <Button variant="raised" onClick={this.tenDay}>10 Day</Button>
            <ReactFC {...chartConfigs}/>
            </div>
        )
    }
}