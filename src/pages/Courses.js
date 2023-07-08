import { useState } from "react";
import "../styles/Course.css";

function Course() {
    const [table1Data] = useState([
        { column1: "Admission Mode", column2: "Entrance Test: IQPT, IEMT, ISAT" },
        { column1: "Course Code", column2: "Beginner" },
        { column1: "Commencement Date", column2: "1st Week of April." },
        { column1: "Phases", column2: "2 Phases 6 months each" },
        {
            column1: "Frequency of Classes / SDCC",
            column2:
                "Saturday, Sunday and School holidays 3 to 4 hours on each day. student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
        },
    ]);
    const [table2Data] = useState([
        { column1: "Admission Mode", column2: "Entrance Test: IQPT, IEMT, ISAT" },
        { column1: "Course Code", column2: "Entire" },
        { column1: "Commencement Date", column2: "1st Week of April." },
        { column1: "Phases", column2: "2 Phases 6 months each" },
        {
            column1: "Frequency of Classes / SDCC",
            column2:
                "Saturday, Sunday and School holidays 3 to 4 hours on each day. student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
        },
    ]);
    const [table3Data] = useState([
        { column1: "Admission Mode", column2: "Entrance Test: IQPT, IEMT, ISAT" },
        { column1: "Course Code", column2: "Intake" },
        { column1: "Commencement Date", column2: "1st Week of April." },
        { column1: "Phases", column2: "2 Phases 6 months each" },
        {
            column1: "Frequency of Classes / SDCC",
            column2:
                "Saturday, Sunday and School holidays 3 to 4 hours on each day. student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
        },
    ]);
    const [table4Data] = useState([
        { column1: "Admission Mode", column2: "Entrance Test: IQPT, IEMT, ISAT" },
        { column1: "Course Code", column2: "Ignite" },
        { column1: "Commencement Date", column2: "1st Week of April." },
        { column1: "Phases", column2: "2 Phases 6 months each" },
        {
            column1: "Frequency of Classes / SDCC",
            column2:
                "Saturday, Sunday and School holidays 3 to 4 hours on each day. student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
        },
    ]);
    const [table5Data] = useState([
        { column1: "Admission Mode", column2: "Entrance Test: IQPT, IEMT, ISAT" },
        { column1: "Course Code", column2: "Carry Forward" },
        { column1: "Commencement Date", column2: "1st Week of March." },
        { column1: "Phases", column2: "2 Phases 3 months each" },
        {
            column1: "Frequency of Classes / SDCC",
            column2:
                "Classes will be conducted 3/4 days in a week for 4 hours on each day student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
        },
    ]);
    const [table6Data] = useState([
        { column1: "Admission Mode", column2: "Entrance Test: ISAT" },
        { column1: "Course Code", column2: "Brush - Up" },
        { column1: "Commencement Date", column2: "1st Week of June." },
        { column1: "Phases", column2: "3 Phases 3 months each" },
        {
            column1: "Frequency of Classes / SDCC",
            column2:
                "Classes will be conducted 5/6 days in a week for 5 hours on each day student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
        },
    ]);
    const [table7Data] = useState([
        { column1: "Admission Mode", column2: "Entrance Test:IQPT, IEMT, ISAT" },
        { column1: "Course Code", column2: "Zenith" },
        { column1: "Commencement Date", column2: "1st Week of April." },
        { column1: "Phases", column2: "3 Phases 3 months each" },
        {
            column1: "Frequency of Classes / SDCC",
            column2:
                "Classes will be conducted 3/4 days in a week for 4 hours on each day student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
        },
    ]);

    const logTableValues = (tableData) => {
        const column2Values = tableData.map((row) => row.column2);
        console.log(column2Values);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 order-md-1">
                    <div className="box-group">
                        <div className="box fw-bold yellow-size bg-warning box1 small-height">
                            <span className="box-content">7</span>
                        </div>
                        <div className="mt-1 fw-bold box2">
                            <span className="box-content blue-box">BEGINNER</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 order-md-2">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="bg-danger text-white text-center"
                                            colSpan={2}
                                        >
                                            Olympaids: IOQJS, INAO, IAO, NSO, NSEJS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table1Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold">{row.column1}</td>
                                            <td>{row.column2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="btn btn-warning"
                                onClick={() => logTableValues(table1Data)}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 order-md-1">
                    <div className="box-group">
                        <div className="box box1 fw-bold yellow-size small-height bg-warning">
                            <span className="box-content">8</span>
                        </div>
                        <div className="mt-1 fw-bold box2">
                            <span className="box-content blue-box">ENTIRE</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 order-md-2">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="bg-danger text-white text-center"
                                            colSpan={2}
                                        >
                                            Olympaids: IOQJS, INAO, IAO, NSO, NSEJS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table2Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold">{row.column1}</td>
                                            <td>{row.column2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="btn btn-warning"
                                onClick={() => logTableValues(table2Data)}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 order-md-1">
                    <div className="box-group">
                        <div className="box box1 fw-bold yellow-size bg-warning small-height">
                            <span className="box-content ">7</span>
                        </div>
                        <div className="mt-1 fw-bold box2">
                            <span className="box-content blue-box">INTAKE</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 order-md-2">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="bg-danger text-white text-center"
                                            colSpan={2}
                                        >
                                            Olympaids: NSO, NSEJS, IMO, JSO, JSTSE, INMO, PRMO & RMO
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table3Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold" >{row.column1}</td>
                                            <td>{row.column2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="btn btn-warning"
                                onClick={() => logTableValues(table3Data)}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 order-md-1">
                    <div className="box-group">
                        <div className="box box1 fw-bold yellow-size bg-warning small-height">
                            <span className="box-content">10</span>
                        </div>
                        <div className="mt-1 fw-bold box2">
                            <span className="box-content blue-box">IGNITE</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 order-md-2">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="bg-danger text-white text-center"
                                            colSpan={2}
                                        >
                                            Olympaids: NSEJS, IMO, JSO, JSTSE, INMO, PRMO RMO & ISO
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table4Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold">{row.column1}</td>
                                            <td>{row.column2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="btn btn-warning"
                                onClick={() => logTableValues(table4Data)}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 order-md-1">
                    <div className="box-group">
                        <div className="box box1 fw-bold bg-warning small-height">
                            <span className="box-content yellow-size">12</span>
                        </div>
                        <div className="mt-1 box2 fw-bold">
                            <span className="box-content p-4 blue-box">CARRY FORWARD</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 order-md-2">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="bg-danger text-white text-center"
                                            colSpan={2}
                                        >
                                            Synchronized Study o XII Board along with the main focus on
                                            JEE (Main + Advanced)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table5Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold">{row.column1}</td>
                                            <td>{row.column2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="btn btn-warning"
                                onClick={() => logTableValues(table5Data)}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 order-md-1">
                    <div className="box-group">
                        <div className="box box1 fw-bold bg-warning small-height">
                            <span className="box-content yellow-size">12</span>
                        </div>
                        <div className="mt-1 box2 fw-bold">
                            <span className="box-content blue-box">BRUSH-UP</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 order-md-2">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="bg-danger text-white text-center"
                                            colSpan={2}
                                        >
                                            Main focus on JEE (Main + Advanced)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table6Data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.column1}</td>
                                            <td>{row.column2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="btn btn-warning"
                                onClick={() => logTableValues(table6Data)}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 order-md-1">
                    <div className="box-group">
                        <div className="box box1 fw-bold yellow-size bg-warning small-height">
                            <span className="box-content">11</span>
                        </div>
                        <div className="mt-1 fw-bold box2">
                            <span className="box-content blue-box">ZENITH</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 order-md-2">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            className="bg-danger text-white text-center"
                                            colSpan={2}
                                        >
                                            Synchronized Study o XII Board along with the main focus on
                                            JEE (Main + Advanced)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table7Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="fw-bold">{row.column1}</td>
                                            <td>{row.column2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="btn btn-warning"
                                onClick={() => logTableValues(table7Data)}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;