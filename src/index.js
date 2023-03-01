import React from "react";
import { render } from "react-dom";
import Autocomplete from "./Autocomplete";

import $ from 'jquery';

var arr_a = require("./med_list/items_a.js");
var arr_b = require("./med_list/items_b_c.js");
var arr_d = require("./med_list/items_d_e.js");
var arr_f = require("./med_list/items_f_g.js");
var arr_h = require("./med_list/items_h_i.js");
var arr_j = require("./med_list/items_j_k.js");
var arr_l = require("./med_list/items_l_m.js");
var arr_n = require("./med_list/items_n_o.js");
var arr_p = require("./med_list/items_p_q.js");
var arr_r = require("./med_list/items_r_s.js");
var arr_t = require("./med_list/items_t_u.js");
var arr_v = require("./med_list/items_v_w.js");
var arr_x = require("./med_list/items_x_y_z.js");


require("./index.css");

const path = "src/";


function App() {
  return (
    <div>
      <h1>Search</h1>
      
      <div class="flex-container">
  
  <div class = "flex-child">
            <h4>Search for medicines A </h4>
            
            <br></br>
            <Autocomplete suggestions={arr_a.arr1}/>
            
        
        
            <br></br><br></br>
          <h4>Search for medicines B-C </h4>
          <br></br>
          <Autocomplete suggestions={arr_b.arr2} />
        
        <br></br><br></br>
        
          <h4>Search for medicines D-E</h4>
          <br></br>
          <Autocomplete suggestions={arr_d.arr3} />
        
          <br></br><br></br>
        
          <h4>Search for medicines F-G </h4>
          <br></br>
          <Autocomplete suggestions={arr_f.arr4} />
        
       
        <br></br><br></br>
          <h4>Search for medicines H-I </h4>
          <br></br>
          <Autocomplete suggestions={arr_h.arr5} />
        
        <br></br><br></br>
     
        </div>
        <div class = "flex-child">
          <h4>Search for medicines J-K </h4>
          <br></br>
          <Autocomplete suggestions={arr_j.arr6} />
        
        <br></br><br></br>
        
          <h4>Search for medicines L-M </h4>
          <br></br>
          <Autocomplete suggestions={arr_l.arr7} />
        
        <br></br><br></br>
        
          <h4>Search for medicines N-O </h4>
          <br></br>
          <Autocomplete suggestions={arr_n.arr8} />
        
        <br></br><br></br>
        
          <h4>Search for medicines P-Q </h4>
          <br></br>
          <Autocomplete suggestions={arr_p.arr9} />
        
        <br></br><br></br>
        
          <h4>Search for medicines R-S </h4>
          <br></br>
          <Autocomplete suggestions={arr_r.arr10} />
        
        <br></br><br></br>
        </div>
        <div class = "flex-child">
        
          <h4>Search for medicines T-U </h4>
          <br></br>
          <Autocomplete suggestions={arr_t.arr11} />
        
        <br></br><br></br>
        
          <h4>Search for medicines V-W </h4>
          <br></br>
          <Autocomplete suggestions={arr_v.arr12} />
        
        <br></br><br></br>
        
          <h4>Search for medicines X-Y-Z </h4>
          <br></br>
          <Autocomplete suggestions={arr_x.arr13} />
        
        </div>
        

  
</div>
        
       
      </div>
   
      

  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
