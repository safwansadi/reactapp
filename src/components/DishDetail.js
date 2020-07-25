import React ,{ Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class DishDetail extends Component{
        constructor(props){
            super(props);
            this.state={

            }
        }



    formatDate({ date }) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }


    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg  src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );

    }
    renderComments(cmnt){
        if(cmnt != null){
            let list =cmnt.map((cmnt)=>{
                let date=cmnt.date

            return(
                <li key={cmnt.id} >
                    <div>
                        <p>{cmnt.comment}</p>
                        <p>--{cmnt.author},{this.formatDate({date})}</p>
                    </div>
                </li>
                );
            })
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div><h6>There are no comments</h6></div>
            )
        }



    }

    


    render(){
        
          const {dishSelect} = this.props;
        console.log(dishSelect);

        return dishSelect?(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dishSelect)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dishSelect.comments)}
                </div>
            </div>
        ):(
            <div></div>
        )

    }
    }
    export default DishDetail;
