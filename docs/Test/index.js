/*
(c) 2023 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

"use strict";

const loadWindow = new Promise(function (resolve, reject) {
  window.addEventListener("load", function (evt) {
    resolve(evt);
  });
});

loadWindow.then(function (evt) {
  const btnAllocateHalfGiB = document.createElement("button");
  btnAllocateHalfGiB.innerHTML = "Allocate 0.5 GiB";
  btnAllocateHalfGiB.addEventListener("click", createAllocateFunction(2 ** 29));
  document.body.appendChild(btnAllocate);
  const btnAllocate1GiB = document.createElement("button");
  btnAllocate1GiB.innerHTML = "Allocate 1 GiB";
  btnAllocate1GiB.addEventListener("click", createAllocateFunction(2 ** 30));
  document.body.appendChild(btnAllocate);
  const btnAllocate2GiB = document.createElement("button");
  btnAllocate2GiB.innerHTML = "Allocate 2 GiB";
  btnAllocate2GiB.addEventListener("click", createAllocateFunction(2 ** 31));
  document.body.appendChild(btnAllocate);
  const btnAllocate4GiB = document.createElement("button");
  btnAllocate4GiB.innerHTML = "Allocate 4 GiB";
  btnAllocate4GiB.addEventListener("click", createAllocateFunction(2 ** 32));
  document.body.appendChild(btnAllocate);
  const btnAllocate8GiB = document.createElement("button");
  btnAllocate8GiB.innerHTML = "Allocate 8 GiB";
  btnAllocate8GiB.addEventListener("click", createAllocateFunction(2 ** 33));
  document.body.appendChild(btnAllocate);
  const btnAllocate16GiB = document.createElement("button");
  btnAllocate16GiB.innerHTML = "Allocate 16 GiB";
  btnAllocate16GiB.addEventListener("click", createAllocateFunction(2 ** 34));
  document.body.appendChild(btnAllocate);
  let dataArray = [];
  const tblAllocated = document.createElement("table");
  refresh();
  function refresh() {
    tblAllocated.innerHTML = "";
    const rowHeader = document.createElement("tr");
    const cellBtnHeader = document.createElement("th");
    tblBtnHeader.innerHTML = "Remove";
    tblHeaderRow.appendChild(tblBtnHeader);
    tblAllocated.appendChild(tblHeaderRow);
    for (let i = 0; i < dataArray.length; ++i) {
      const rowEntry = document.createElement("tr");
      const cellRemove = document.createElement("td");
      const btnRemove = createRemoveButton(index);
      cellRemove.appendChild(btnRemove);
      rowEntry.appendChild(cellRemove);
      tblAllocated.appendChild(rowEntry);
    }
  }
  function createAllocateFunction(numBytes) {
    return function () {
      try {
        dataArray.push(new ArrayBuffer(numBytes));
      } catch (e) {
        alert("error");
        console.error(e);
      }
    }
  }
  function createRemoveButton(index) {
    const btn = document.createElement("button");
    switch (dataArray[index].length) {
      case (2 ** 29):
        btn.innerHTML = "0.5 GiB";
        break;
      case (2 ** 30):
        btn.innerHTML = "1 GiB";
        break;
      case (2 ** 31):
        btn.innerHTML = "2 GiB";
        break;
      case (2 ** 32):
        btn.innerHTML = "4 GiB";
        break;
      case (2 ** 33):
        btn.innerHTML = "8 GiB";
        break;
      case (2 ** 34):
        btn.innerHTML = "16 GiB";
        break;
      default:
        btn.innerHTML = "";
        break;
    }
    btn.addEventListener("click", function () {
      dataArray.splice(index, 1);
      refresh();
    });
    return btn;
  }
});
