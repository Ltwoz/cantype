import React from "react";

function About() {
    const monkeytype = (
        <a href="https://monkeytype.com/" target="_blank">
            Monkeytype
        </a>
    );

    return (
        <div className="about">
            {/* section */}
            <div className="section">
                <h1>เกี่ยวกับ</h1>
                <p style={{ textIndent: "4rem" }}>
                    Cantype เว็บไซต์สำหรับทดสอบความเร็วการพิมพ์
                    เป็นโปรเจคของนักศึกษา ชั้นประกาศนียบัตรวิชาชีพปีที่ 3
                    (ปวช.3) แผนกเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคเชียงใหม่
                    ปีการศึกษา 2565 โดยเว็บไซต์นี้ได้แรงบันดาลใจมาจากเว็บไซต์ของต่างประเทศ{" "}
                    {monkeytype} เพราะทางผู้พัฒนาก็มีความชอบการพิมพ์อยู่แล้ว
                    จึงได้ทำเว็บไซต์สำหรับทดสอบความเร็วการพิมพ์ขึ้นมา
                    เพื่อท้าทายความสามารถของตัวเอง
                </p>
                <p style={{ textIndent: "4rem" }}>
                    
                </p>
            </div>
            <div className="section">
                <h1>จัดทำโดย</h1>
                <div className="contributors">
                    <p>นาย นพวิทย์ เอื้องเงินวิไล 014</p>
                    <p>นาย ภาคิน โสมศุภผล 025</p>
                    <p>นาย วรภัทร เชิดชูสกุลรัตน์ 032</p>
                </div>
            </div>
        </div>
    );
}

export default About;
