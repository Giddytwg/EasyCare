import Heading from "../Components/Heading";
import QnA from '../Data/QnA.jsx';
import Qcard from "../Components/Qcard";

const FAQs = () => {
    const QnAs = QnA;

    return ( 
        <section className="services p-6 md:p-14 flex flex-col gap-4">
                <div className=" text-center">
                    <Heading title='FAQs' bg='white' msg='Common Questions, Clear Answers.' />
                </div>
                <div className="Question-container grid grid-cols-1 gap-6 md:grid-cols-2">
                    {QnAs.map((qna, i) =>(
                            <Qcard qna={qna} key={i}/>
                    ))}
                </div>
        </section>
     );
}
 
export default FAQs;