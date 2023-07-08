import React, { useState } from 'react'
import '../styles/Vision.css';

export default function Chairman() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleLinks = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const renderToggleIcon = (index) => {
        return activeIndex === index ? '-' : '+';
    };

    return (
        <div class="parent-div">
            <div className="download">
                <h1 id='super-head'>
                    Chairman's Message
                </h1>
            </div>
            <div className="outer-container">
                <div className="inner-div1">
                    <h3>Related Links</h3>
                    <div className='links'>
                        <ul>
                            <li className='links-tag'><a href="#">About</a></li>
                            <li className='links-tag'><a href="#">Mission</a></li>
                            <li className='links-tag'><a href="#">Policies</a></li>
                        </ul>
                    </div>
                </div>
                <div className='content'>

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel maxime ad fugit vero id enim, nesciunt velit a natus ipsa eveniet optio ducimus minima? Perspiciatis delectus vitae animi dignissimos officiis, cum tempore voluptas tempora autem. Magnam animi quis sed tempora aliquid vitae voluptates ea voluptate rem ut deserunt fugiat nobis dicta nulla distinctio voluptas, tempore provident repellendus reprehenderit earum. Quis voluptate asperiores, quo et dolore aperiam velit veniam aliquam. Corrupti suscipit nulla minima ab esse consequatur fugiat libero! Sunt dolorem voluptatem dicta, non ipsa eum dolore quaerat nihil necessitatibus optio cumque culpa quidem accusantium id saepe reprehenderit quibusdam atque veritatis iste? Blanditiis nihil libero molestias natus. Consequatur temporibus nesciunt molestiae, iusto accusantium nulla illo fuga eligendi distinctio rem nemo totam at officiis excepturi aspernatur libero quasi officia nam natus soluta numquam corrupti nihil doloremque. Labore, illum nisi accusantium error libero iste corporis enim culpa soluta asperiores, saepe consequuntur hic? Ullam ea quidem amet architecto rem, voluptatem aliquid quos aliquam quod, error, neque accusantium nam. Dolor accusamus repellat eveniet quo ullam perspiciatis quas voluptas, praesentium quis iure ducimus placeat necessitatibus cupiditate sit molestiae unde modi pariatur. Quos atque, vitae quam minima, repellat assumenda, ea aspernatur eveniet quisquam officia labore! Autem?
                    </div>
                </div>


            </div>

        </div >

    )
}