import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col gap-4 m-10'>
            <div className="card w-full bg-base-100 shadow-xl border-2">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL?</h2>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='border-2 text-center font-semibold py-2'>SQL</p>
                            <ul>
                                <li className='py-2 bg-slate-800'>Relational database management system(RDMS)</li>
                                <li className='py-2 '>These databases have fixed or static or predefined schema</li>
                                <li className='py-2 bg-slate-800'>These databases are not suited for hierarchical data storage.</li>
                                <li className='py-2 '>These databases are best suited for complex queries</li>
                                <li className='py-2 bg-slate-800'>Vertically Scalable.</li>
                                <li className='py-2 '>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</li>
                            </ul>
                        </div>
                        <div>
                            <p className='border-2 text-center font-semibold py-2'>NO SQL</p>
                            <ul>
                                <li className='py-2 bg-slate-800'>Non-relational or distributed database system.</li>
                                <li className='py-2 '>They have dynamic schema
                                </li>
                                <li className='py-2 bg-slate-800'>These databases are best suited for hierarchical data storage.
                                </li>
                                <li className='py-2 '>These databases are not so good for complex queries
                                </li>
                                <li className='py-2 bg-slate-800'>Horizontally scalable
                                </li>
                                <li className='py-2 '>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="card w-full border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title border 2 p-2 rounded-md">What is JWT, and how does it work?</h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.<br></br><br></br>
                        A common way to use JWTs is as OAuth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT’s signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client’s request.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl border-2">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='border-2 text-center font-semibold py-2'>Javascript</p>
                            <ul>
                                <li className='py-2 bg-slate-800'>RJavascript is a programming language that is used for writing scripts on the website.
                                </li>
                                <li className='py-2 '>Javascript can only be run in the browsers.</li>
                                <li className='py-2 bg-slate-800'>It is basically used on the client-side.</li>
                                <li className='py-2 '>Javascript is capable enough to add HTML and play with the DOM</li>
                                <li className='py-2 bg-slate-800'>Javascript is used in frontend development.</li>
                                <li className='py-2 '>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>
                            </ul>
                        </div>
                        <div>
                            <p className='border-2 text-center font-semibold py-2'>NodeJS</p>
                            <ul>
                                <li className='py-2 bg-slate-800'>NodeJS is a Javascript runtime environment.
                                </li>
                                <li className='py-2 '>We can run Javascript outside the browser with the help of NodeJS.
                                </li>
                                <li className='py-2 bg-slate-800'>It is mostly used on the server-side.
                                </li>
                                <li className='py-2 '>Nodejs does not have capability to add HTML tags.
                                </li>
                                <li className='py-2 bg-slate-800'>Nodejs is used in server-side development.
                                </li>
                                <li className='py-2 '>Nodejs is written in C, C++ and Javascript.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card w-full border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title border 2 p-2 rounded-md">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.<br></br><br></br>

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;