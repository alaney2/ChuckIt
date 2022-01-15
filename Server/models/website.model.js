const sql = require('./db.js');

const Website = function(website) {
  this.url = website.url;
  this.likes = website.likes;
  this.neutrals = website.neutrals;
  this.dislikes = website.dislikes;
}

Website.create = (newWebsite, done) => {
  sql.query('INSERT INTO websites SET ?', newWebsite, (err, data) => {
    if (err) {
      console.error('error: ', err);
      done(err, null);
      return;
    }

    console.log('Created website: ', { id: data.insertId, ...newWebsite });
    done(null, { id: data.insertId, ...newWebsite });
  });
};

Website.findById = (id, done) => {
  sql.query(`SELECT * FROM websites WHERE id = ${id}`, (err, data) => {
    if (err) {
      console.error('error: ', err);
      done(err, null);
      return;
    }

    if (data.length) {
      console.log('found website: ', data[0]);
      done(null, data[0]);
      return;
    }

    done({ kind: 'not_found' }, null);
  });
};

Website.getAll = (search, done) => {
  let query = 'SELECT * FROM websites';

  if (search) query += ` WHERE url LIKE '%${search}'`;

  sql.query(query, (err, data) => {
    if (err) {
      console.error('error: ', err);
      done(err, null);
      return;
    }

    console.log('websites: ', data);
    done(null, data);
  });
};

Website.updateById = (id, website, done) => {
  sql.query(
    'UPDATE websites SET url = ?, likes = ?, neutrals = ?, dislikes = ? WHERE id = ?',
    [website.url, website.likes, website.neutrals, website.dislikes, id],
    (err, data) => {
      if (err) {
        console.error('error: ', err);
        done(err, null);
        return;
      }

      if (data.affectedRows === 0) done({ kind: 'not_found' }, null);

      console.log('updated website: ', { id: id, ...website });
      done(null, { id: id, ...website });
    }
  );
};

Website.remove = (id, done) => {
  sql.query('DELETE FROM websites WHERE id = ?', id, (err, data) => {
    if (err) {
      console.error('error: ', err);
      done(err, null);
      return;
    }

    if (data.affectedRows === 0) {
      done({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted website with id: ', id);
    done(null, data);
  });
};

Website.removeAll = done => {
  sql.query('DELETE FROM websites', (err, data) => {
    if (err) {
      console.error('error: ', err);
      done(err, null);
      return;
    }

    console.log(`deleted ${data.affectedRows} websites`);
    done(null, data);
  });
};

module.exports = Website;