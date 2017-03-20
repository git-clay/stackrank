import React from "react"
import { connect } from "react-redux"

//import stores

@connect((store)=>{
	return{
		user: store.user
	}
})

export default class Layout React.Componenet {
	componenetWillMount(){

	}


	render(){
		return <div>

		</div>		
	}
}