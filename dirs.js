const Promise = require('bluebird');
//const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));

const dirs = [
    'dir-1/dir-1-1',
    'dir-1/dir-1-2',
    'dir-1/dir-1-2/dir-1-2-1',
    'dir-2/dir-2-1/dir-2-1-1',
    'dir-2/dir-2-2/dir-2-2-1',
    'dir-2/dir-2-1/dir-2-2-2/dir-2-2-2-1',
    'dir-3/dir-3-1',
    'dir-3',
    'dir-3/dir-3-2/dir-3-2-1',
    'dir-3/dir-3-3/dir-3-3-1'
];

function createDir(dir)
{
    path.normalize(dir);
    let dirs = dir.split('/');
    console.log(dirs);
    for (let i = 1; i <= dirs.length; i++)
    {

        let p = dirs.slice(0, i).join('/');
        console.log(p);
        fs.stat(p, (err, status) =>
        {
            if (err)
            {
                if (p !== '') fs.mkdir(p, err => {});
            }
        });

    }
    return true;
}

Promise.mapSeries(dirs, dir => createDir(dir))
    .then(function (results)
          {
              console.log('result', results);
          });