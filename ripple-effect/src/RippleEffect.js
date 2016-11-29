import React from 'react';


const wrapStyle = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
}

class Ripple extends React.Component {

	constructor(props) {
    super(props);
    	console.log(this.props.effect);
    	this.handleClick = this.handleClick.bind(this);
    	this.state = {
		    rippleStyle: {
		    	position: 'absolute',
				  borderRadius: '50%',
				  width: 20,
  				height: 20,
				  opacity: 0,
				  transform: 'translate(-50%, -50%)',
				  pointerEvents: 'none',
		    },
  		}
	}
		handleClick(ev){
    const {color, during} = this.props;
    const wid =document.getElementById('ripp').offsetWidth;
    const hei =document.getElementById('ripp').offsetHeight;
    const top =hei/2;
    const left =wid/2;
    
    console.log(wid,hei,top,left)
    
    this.setState({
      rippleStyle: {
      	position: 'absolute',
      	borderRadius: '50%',
      	width: 20,
  			height: 20,
        top, left,
        transform: 'translate(-50%, -50%)',
				pointerEvents: 'none',
        opacity: 1,
        backgroundColor: color,
      }
    })

    setTimeout(()=> {
      const size = Math.max(wid, hei);

      this.setState({
        rippleStyle: {
        	position: 'absolute',
				  borderRadius: '50%',
				  width: 20,
  				height: 20,
          left, top,
          transform: `${'translate(-50%, -50%)'} scale(${size/9})`,
          opacity: 0,
          pointerEvents: 'none',
          transition: `all ${during}ms`,
        }
      })
    }, 10)

   
  }
		render(){
		return(
				<div id="ripp" className={this.props.effect?"rippleEffect active":"rippleEffect"}  style={wrapStyle} >
					{this.props.children}
					<s  style={this.state.rippleStyle}/>
				</div>
				
			)
	}
}

export default Ripple;

