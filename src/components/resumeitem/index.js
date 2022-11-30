import './styles.css'

export const ResumeItem = ({title,Icon,value}) =>{
return(
    <div className='containeritem'>
        <div className='divtitle' >
            <h1>{title}</h1>
            <Icon className='icon'/>
        </div>
        <div>
            <p className='total'>{value}</p>
        </div>
    </div>
);
}