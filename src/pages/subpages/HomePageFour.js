import React from 'react';
import '../../styles/HomePageFour.css';

const HomePageFour = (props) => {
    const { image1, image2, registerBtnImage } = props;

    return (
        <div>
            <section className="scholarship-cum-admission-section" style={{ paddingTop: '5px' }}>
                <div className="auto-log0-continer">
                    <div className="container-Students-going-to-Class">
                        <div className="container">
                            <div className="last-chance-box">
                                <div className="row">
                                    <div className="IPEC-width-100">
                                        <div className="last-chance-box-1">
                                            <div className="red-bg">
                                                <h2>Attention! Students of Class VI, VII, VIII, IX, X, XI, XII &amp; Pass XII</h2>
                                                <h4>Come, give yourself the advantage of IPEC's Winning Formula for Ultimate Success</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="students-going-to-class-VI-to-X-box">
                                    <div className="flex-box-IPEC">
                                        <div className="IPEC-width-50">
                                            <div className="students-going-to-class-VI-to-X-hed">
                                                <img src={image1} style={{ width: '100%' }} alt="Class 6 to 10" />
                                                <p>
                                                    Course taught in each of Class VI to X is common &amp; same for all students of that
                                                    Class, irrespective of the stream (Arts, Commerce, Humanities, PCM, PCB, PCMB) they
                                                    may opt for while moving to Class XI. Therefore, every student going to Class VI
                                                    to X will immensely benefit from IPEC's Academic Cult Metamorphosis. IPEC's
                                                    Academic Cult Metamorphosis will not only empower them to perform much better academically
                                                    but also empower them with much enhanced Mental Ability including Analytical Skills,
                                                    which are extremely vital for success in any career &amp; life itself.
                                                </p>
                                                <p>
                                                    So, whether you may aim at pursuing higher studies in Arts (CUET), Commerce (CUET),
                                                    Engineering (JEE Main, JEE Advanced, BITSAT, WBJEE, TANCET, EAMCET, KCET, MHTCET...),
                                                    Humanities (CUET), Medicine (NEET) or in pure Sciences P,C,M/B at IISc / IISER or
                                                    at other institutes (CUET), you need a solid foundation that is built by unravelling
                                                    your 100% hidden potential.
                                                </p>
                                                <p>
                                                    Needless to say, you will also be optimally prepared for NTSE, Junior Olympiads
                                                    and at least for the IOQM. No matter what your current academic performance is,
                                                    a IPEC program can help you undergo a metamorphosis.
                                                </p>
                                                <div className="irrespective-of-the-choice-of-stream">
                                                    <b>
                                                        <p>Studying at IPEC is a Must for every student till Class X
                                                            <br />
                                                            irrespective of the choice of stream</p>
                                                        <p>(Arts / Commerce / Engineering / Humanities / Medical)</p>
                                                    </b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="IPEC-width-50">
                                            <div className="students-going-to-class-VI-to-X-hed">
                                                <img src={image2} style={{ width: '100%' }} alt="Class 11 and 12" />
                                                <p>
                                                    If preparing for engineering entrance exams is your goal, then look no further.
                                                    IPEC is the only choice.
                                                </p>
                                                <p>
                                                    You will inherit the pedigree of 26 years of unmatched, consistent dominance in
                                                    results in all engineering entrance exams including IIT-JEE / JEE Advanced, AIEEE
                                                    / JEE Main, BITSAT, WBJEE, TANCET, EAMCET, KCET, MHTCET.... Best way to ace Engineering
                                                    Entrance Exams is to join a IPEC Program at least from Class IX onwards. Most
                                                    of the JEE Advanced toppers start their preparation with IPEC from class VI to
                                                    IX itself.
                                                </p>
                                                <p>
                                                    If you wish to pursue higher studies in pure Sciences with PCM subject domain through
                                                    CUET, the IPEC advantage is still crucial not just to ace the CUET but to have
                                                    that strong foundation that will lead to excellence in further studies. Our programs
                                                    will simultaneously help you score high in XII Boards as well as Advanced Placement
                                                    (AP) exams crucial for admission to world's best colleges in USA, UK &amp; Canada.
                                                </p>
                                                <div className="irrespective-of-the-choice-of-stream-margin-bottom">
                                                    <div className="irrespective-of-the-choice-of-stream">
                                                        <b>
                                                            <p>
                                                                If you are taking PCM and wish to pursue a non-engineering career, then you must
                                                                study with IPEC till class XII to acquire deep thinking and analytical skills
                                                                required for success in competitive exams, career &amp; life.
                                                            </p>
                                                        </b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Students-presently-March-box">
                                    <div className="flex-box-IPEC">
                                        <div className="IPEC-width-100">
                                            <div className="date-february-march">
                                                <h2>Scholarship cum Admission Test Dates - <strong>July to September 2023</strong></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-box-IPEC">
                                        <div className="IPEC-width-33">
                                            <div className="box-design-padding">
                                                <div className="box-design-margin box-design">
                                                    <h3>For Class <strong style={{ color: '#000' }}>XI &amp; XII Pass Students</strong></h3>
                                                    <p style={{ fontSize: '12px', textAlign: 'center', color: '#000', fontWeight: 'normal', marginBottom: '5px', paddingTop: '0px' }}>
                                                        Registration for 16th July Test date is also open for <br />students of <strong>Class VII</strong> &amp; <strong>Class
                                                            IX</strong> at <strong>Chennai Centres</strong>
                                                    </p>
                                                    <h1 className="datebox">
                                                        16th July 2023
                                                    </h1>
                                                    <p>
                                                        <a href="https://admissiontest.IPEC.com/RegistrationV2.aspx" target="_blank" rel="noopener noreferrer">
                                                            <img src={registerBtnImage} style={{ width: '135px', margin: '0 auto', textAlign: 'center', marginBottom: '4px' }} alt="Register" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="IPEC-width-33">
                                            <div className="box-design-padding">
                                                <div className="box-design-margin box-design">
                                                    <h3>For Class <strong style={{ color: '#000' }}>XI &amp; XII Pass Students</strong></h3>
                                                    <h1 className="datebox">
                                                        30th July 2023
                                                    </h1>
                                                    <p>
                                                        <a href="https://admissiontest.IPEC.com/RegistrationV2.aspx" target="_blank" rel="noopener noreferrer">
                                                            <img src={registerBtnImage} style={{ width: '135px', margin: '0 auto', textAlign: 'center', marginBottom: '4px' }} alt="Register" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="IPEC-width-33">
                                            <div className="box-design-padding">
                                                <div className="box-design-margin box-design">
                                                    <h3>For Class <strong style={{ color: '#000' }}>XI &amp; XII Pass Students</strong></h3>
                                                    <h1 className="datebox">
                                                        6th August 2023
                                                    </h1>
                                                    <p>
                                                        <a href="https://admissiontest.IPEC.com/RegistrationV2.aspx" target="_blank" rel="noopener noreferrer">
                                                            <img src={registerBtnImage} style={{ width: '135px', margin: '0 auto', textAlign: 'center', marginBottom: '4px' }} alt="Register" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-box-IPEC">
                                        <div className="IPEC-width-33 ">
                                            <div className="box-design-padding">
                                                <div className="box-design-margin box-design">
                                                    <h3>For Class <strong style={{ color: '#000' }}>XI &amp; XII Pass Students</strong></h3>
                                                    <h1 className="datebox">
                                                        20th August 2023
                                                    </h1>
                                                    <p>
                                                        <a href="https://admissiontest.IPEC.com/RegistrationV2.aspx" target="_blank" rel="noopener noreferrer">
                                                            <img src={registerBtnImage} style={{ width: '135px', margin: '0 auto', textAlign: 'center', marginBottom: '4px' }} alt="Register" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="IPEC-width-33">
                                            <div className="box-design-padding">
                                                <div className="box-design-margin box-design">
                                                    <h3><strong style={{ color: '#000' }}>For XII Pass Students</strong></h3>
                                                    <h1 className="datebox">
                                                        3rd September 2023
                                                    </h1>
                                                    <p>
                                                        <a href="https://admissiontest.IPEC.com/RegistrationV2.aspx" target="_blank" rel="noopener noreferrer">
                                                            <img src={registerBtnImage} style={{ width: '135px', margin: '0 auto', textAlign: 'center', marginBottom: '4px' }} alt="Register" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="IPEC-width-33">
                                            <div className="box-design-padding">
                                                <div className="box-design-margin box-design">
                                                    <h3><strong style={{ color: '#000' }}>For XII Pass Students</strong></h3>
                                                    <h1 className="datebox">
                                                        10th September 2023
                                                    </h1>
                                                    <p>
                                                        <a href="https://admissiontest.IPEC.com/RegistrationV2.aspx" target="_blank" rel="noopener noreferrer">
                                                            <img src={registerBtnImage} style={{ width: '135px', margin: '0 auto', textAlign: 'center', marginBottom: '4px' }} alt="Register" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>The Test will be conducted through both Offline as well as Proctored Online Mode.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageFour;
