import { ResumeItem } from '../resumeitem';
import './styles.css'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
  } from "react-icons/fa";
export const Resume = ({income , expense , total}) =>{
    return(
        <div className="container">
        <ResumeItem title="entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
        <ResumeItem title="saidas" Icon={FaRegArrowAltCircleDown}value={expense}/>
        <ResumeItem title="total" Icon={FaDollarSign}value={total}/>
        </div>
    );
}