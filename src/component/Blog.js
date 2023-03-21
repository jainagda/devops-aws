import React from 'react'
import devopsLifecycle from "../assest/image/devops_lifecycle.png";
import Header from './Header';

function Blog() {
  return (
    <>
     <Header />
     <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div style={{ width: "50%", height: "50%" }}>
            <img src={devopsLifecycle} width="90%" height="90%" alt="logo" />
          </div>
        </div>

        <div
          style={{
            padding: "20px",
            marginTop: "10px",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <p style={{ width: "95%", fontWeight: 600 }}>
            DevOps is a software development methodology that combines the
            principles of development and operations to increase the efficiency,
            reliability, and speed of software development and deployment. The
            DevOps lifecycle consists of a set of continuous processes that work
            together to ensure that software is delivered quickly and reliably.
          </p>
          <p style={{ fontWeight: 500 }}>
            The following are the phases of the DevOps lifecycle:
          </p>
          <ul>
            <li>
              1. Plan: This is the first phase of the DevOps lifecycle. In this
              phase, the development team and operations team work together to
              plan the development process. This includes defining the project
              scope, requirements, timeline, and goals. This phase also involves
              determining the resources needed for the project.
            </li>
            <li>
              2. Code: In this phase, the developers write and test the code.
              They use code repositories to store the code, and they use
              continuous integration tools to ensure that the code is tested
              continuously. This phase also involves code review and debugging
              to ensure that the code is of high quality.
            </li>
            <li>
              3. Build: In this phase, the code is compiled and built into an
              executable format. This phase also includes running tests to
              ensure that the code is working correctly. The build phase also
              includes packaging the application into a deployable format.
            </li>
            <li>
              4. Test: In this phase, the software is tested thoroughly to
              ensure that it meets the requirements and specifications. This
              includes unit testing, integration testing, and performance
              testing.
            </li>
            <li>
              5. Deploy: In this phase, the software is deployed to the
              production environment. The deployment process is automated, and
              the deployment is done using a deployment pipeline.
            </li>
            <li>
              6. Operate: In this phase, the software is monitored and managed
              in the production environment. This includes monitoring the
              application's performance, ensuring that it is running correctly,
              and making any necessary updates or changes.
            </li>
            <li>
              7. Monitor: In this phase, the application is monitored to ensure
              that it is meeting the requirements and specifications. This
              includes monitoring the application's performance, identifying any
              issues or errors, and taking corrective action.
            </li>
          </ul>
        </div>
      </div>
     </>

  )
}

export default Blog