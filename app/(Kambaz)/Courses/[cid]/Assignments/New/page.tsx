export default function New() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name:</b></label>
      <br/><br/>
      <input id="wd-name" /><br /><br />
      <textarea id="wd-description" cols={60} rows={7} ></textarea>
      <br />
      <table>
        <tbody>
            
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points:</label>
                </td>
                <td>
                    <input id="wd-points"  />
                </td>
            </tr>
            
            <tr>
                <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group:</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option>
                            Assignments
                        </option>
                        <option>
                            etc
                        </option>
                    </select>
                </td>
            </tr>
            
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade as:</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                    <option>
                        Percentage
                    </option>
                    <option>
                        Letter Grade
                    </option>
                    </select>
                </td>
            </tr>
            
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type:</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                    <option>
                        Online
                    </option>
                    <option>
                        In-Person (Offline)
                    </option>
                    </select>
                </td>
            </tr>
            
            <tr>
                <td align="right" valign="top" >
                    <label>Online Entry Options:</label>
                </td>
                <td>
                    <input type="checkbox" name="entry-options" id="text-entry"/>
                    <label htmlFor="text-entry">Text Entry</label><br/>
                    <input type="checkbox" name="entry-options" id="website-url-entry"/>
                    <label htmlFor="website-url-entry">Website URL</label><br/>
                     <input type="checkbox" name="entry-options" id="media-recordings-entry"/>
                    <label htmlFor="media-recordings-entry">Media Recordings</label><br/>
                    <input type="checkbox" name="entry-options" id="student-annotations-entry"/>
                    <label htmlFor="student-annotations-entry">Student Annotations</label><br/>
                    <input type="checkbox" name="entry-options" id="file-upload-entry"/>
                    <label htmlFor="file-upload-entry">File Uploads</label><br/>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top" >
                    <label htmlFor="wd-assign-to">Assign to:</label>
                </td>
                <td>
                    <input id="wd-assign-to"  />
                </td>
            </tr>
            <tr>
                <td align="right" valign="top" >
                    <label htmlFor="wd-due">Due:</label>
                </td>
                <td>
                    <input type="date" id="wd-due" />
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="wd-available-from">Available From:</label><br/>
                    <input type="date" id="wd-available-from" />
                </td>
                <td>
                    <label htmlFor="wd-available-until">Available Until:</label><br/>
                    <input type="date" id="wd-available-until" />
                </td>
            </tr>
            <tr>
                <td>
                    <hr/>
                    <button>Cancel</button>
                </td>
                <td>
                    <hr/>
                    <button>Save</button>
                </td>
            </tr>
        </tbody>
      </table>

    </div>
);}
