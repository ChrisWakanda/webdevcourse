"use client";
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HTTPClient";
import PathParametersFromServer from "./PathParametersFromServer";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithOArraysAsynchronously from "./WorkingWithArraysAsync";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsync";
const NEXT_HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <div>
        <br/>
                <h1>Lab 5</h1>
                <br/>
                <h1>Implementing RESTful Web APIs with Express.js:</h1><br/>
            </div>
      <div className="list-group">
        <a href={`${NEXT_HTTP_SERVER}/lab5/welcome`}          
           className="list-group-item">
           Welcome
        </a>
      </div><hr/>
      <EnvironmentVariables/>
      <PathParametersFromServer/>
      <QueryParameters/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
      <HttpClient/>
      <WorkingWithObjectsAsynchronously/>
      <WorkingWithOArraysAsynchronously/>
    </div>
);}
