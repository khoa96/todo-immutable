import React from 'react';
import { fromJS } from 'immutable'
export default class Footer extends React.Component {

  componentDidMount() {
    // test immutablejs
    const object = fromJS({
      title: 'Harry Potter & The Goblet of Fire',
      isbn: '0439139600',
      series: 'Harry Potter',
      author: {
        firstName: 'J.K.',
        lastName: 'Rowling'
      },
      genres: [  // list don gian 
        'Crime',
        'Fiction',
        'Adventure'
      ],
      storeListings: [ // list phuc tap
        { storeId: 'amazon', price: 7.95 },
        { storeId: 'barnesnoble', price: 7.95 },
        { storeId: 'biblio', price: 4.99 },
        { storeId: 'bookdepository', price: 11.88 },
      ]
    });

    // sua doi thong tin.
    const o2 = object.setIn(["author", "lastName"], "nguyen dang khoa"); //khong he thay doi object2.
    console.log(object.toJS());
    console.log(o2.toJS())

    // thao tac voi list.getIn(keypath)
    // test.
    const o3 = object.updateIn(["storeListings", 2], item => item.get('price') + 10);
    console.log(o3.toJS())
    const o4 = object.update('genres', genres => genres.push("nguyen dang khoa"));
    console.log(o4.toJS());

    // hoac co the su dung ham set. 
    const o5 = object.set('genres', object.get('genres').push('nguyen hoang trung hieu'));
    console.log(o5.toJS())
    // khi khong biet chi so index ==> su dung findIndex.
    const item_index = object.get('storeListings').findIndex((item) => {
      return item.get('storeId') === 'amazon'
    });
    // sau khi co chi so tien hanh updata
    const o6 = object.setIn(["storeListings", item_index, "price"], 1000);
    console.log(o6.toJS());

    // ham count (): dem so luong phan tu trong mang
    console.log(object.get("storeListings").count());

    // tinh gia tri  trung binh cua cac cuon sach.
    const avg = object.get("storeListings").reduce((acc, item) => acc + item.get('price'), 0) / (object.get('storeListings').count());
    console.log(avg)

    //cap nhat voi map : cap nhat gia cua tat ca thanh phan giam 10%.
    const o7 = object.update('storeListings', list => list.map(item => item.update('price', price => (Math.round((price * 0.9), 2)))))
    console.log(o7.toJS())
    
  }

  render() {
    return <footer className="info">
     
    </footer>
  }
};
