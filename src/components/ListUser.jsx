import React from 'react';

import Input from './Input';

function Sidebar(){

    return (
        <div className="six wide column">
            <Input />
            <table class="ui celled striped table">
                <tbody>
                    <tr>
                        <td>
                            <h4 class="ui image header">
                                <img src="#" class="ui mini rounded image"></img>
                                <div class="content">
                                Name 
                                    <div class="sub header">additional information</div>
                                </div>
                            </h4>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Sidebar;