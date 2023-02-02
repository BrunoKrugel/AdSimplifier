// import { encodeBase64 } from '@/lib/string/base64';
// import clientPromise from '@/lib/mongo/mongo';

// // {$gte:ISODate(“2020-03-01”),$lt:ISODate(“2021-03-31”)}}
// //date_created: {"$gte": new Date("2015-10-01T00:00:00.000Z") , "$lt": new Date("2017-03-13T16:17:36.470Z") }});
// async function getSales(req, res) {
//   return new Promise((resolve, reject) => {
//     clientPromise
//       .then((client) => {
//         let cursor = client
//           .db('kiwify-go')
//           .collection('sales')
//           .findOne(
//             {
//               user_id: encodeBase64(req.body.username),
//               date: {
//                 $gte: new Date(req.body.iniDate + 'T00:00:00.000Z'),
//                 $lt: new Date(req.body.endDate + 'T00:00:00.000Z'),
//               },
//             },
//             function (err, result) {
//               if (err || !result) {
//                 reject();
//               } else {
//                 resolve();
//               }
//             }
//           );
//         //Lets iterate on the result
//         cursor.each(function (err, doc) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log('Fetched:', doc);
//             if (doc !== null) {
//               res.status(200).json(doc);
//             }
//           }
//         });
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// export { getSales };
