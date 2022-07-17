'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ba9a34700a411dd23a5ba7d0c91af281",
"index.html": "451843c0c27a66c11b83a19ed8ad1c64",
"/": "451843c0c27a66c11b83a19ed8ad1c64",
"main.dart.js": "19fe6702da6e25ebf23b75c86c55a65f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "b0c517f59a01fc307aa2601c6f58c32a",
"icons/Icon-192.png": "9a66174293732e3489462907041da074",
"icons/Icon-maskable-192.png": "9a66174293732e3489462907041da074",
"icons/Icon-maskable-512.png": "b6b9606454b797e90b6ffd5aeb3f098b",
"icons/Icon-512.png": "b6b9606454b797e90b6ffd5aeb3f098b",
"manifest.json": "57473ba1119e2efc8a7cbdce911d1039",
".git/config": "76e32ce7e2f338f88cdeb0530338a04e",
".git/objects/0d/734cd4e6fe81966d1d1f5accd046b65596ec03": "7753be275e8fe37c0f38588c62272129",
".git/objects/0d/b121a5f7fc8375c273e1d5513063b75c9ecf5e": "40329fc83253f26f02c092129bf0d7cf",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/ecab1ff56ce10cb120813f332205d7cb7993af": "a78624cd4068b9fda94d356a98b48d54",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/0c/766ef3b6728ae231c923bdbbacd9764acc34be": "9c9afc0d0758cbe00179bc5e286e0487",
".git/objects/68/10b0477840145d031cb106e6a3f72d868a5f16": "431a082a81f2950c9ff1c903c7486215",
".git/objects/68/e16f787d111aac44d5f8cec64aead295fada6f": "b9b3195730e867d33922c4f5ad5eb67e",
".git/objects/3b/237010aaa0a95aaa2fadeee859d80f3756dfd2": "15e2ba1a972bff1ef3fc6449b3323d86",
".git/objects/3b/899dcd6314f367d34fdf5fc7456515079c9c67": "2c24f9372fbcc5462c3229d8a738c536",
".git/objects/9b/ff334ec69899eb05bdfc9126023f852d66d0a8": "ba6166cfb2b11f96c5b538582b17298b",
".git/objects/9e/2c8815a233433f371064a912f6c145c6c7f571": "095290c133cda260456e7f6566f5c0f2",
".git/objects/32/396b0252ef518acb0dcda33806d0ce654b3dcd": "c84b7165fd60dde4dfc69b2e1632c574",
".git/objects/32/c8d0351a807e522574c5524b55e5b75119ac4e": "4b89a73be95f203998982a27b9fba0b5",
".git/objects/69/831c628c792e87eeaedaa1c4c3af6a29a11556": "4079262739b1e46a68397fe0ddf7dc4c",
".git/objects/3c/293b6889f8114433151c235cc2352b73128994": "d67fff77307416e896f161716d8f4df6",
".git/objects/3c/4416e368725d28892e96277a82eff987b731a2": "18bf5f41ae72c411c9739953dc71e1e4",
".git/objects/0e/d3fe7fc7614031cfc9215d646ceb039783b5e3": "58f5280720c9321ef15025fd8f24393b",
".git/objects/0e/9152e05354b4704851a9ef67eafb14632a26bd": "4509b01efa2af7f80e0b6a298199f4d3",
".git/objects/5a/ec83b93b84a6a8493cb74c4c94a23b1c6f2e0d": "3ee2749e9fd6bb13d33639973ce790ba",
".git/objects/05/d562917d344ca4330d26f855c973bacc98bb15": "7078b0f9c20548f88eb347793e597cce",
".git/objects/9d/b80a514a0a2a7ac7b0e056c46ff754e94cca62": "cfff9a8660b73c5792c55d23d8bb52c2",
".git/objects/9d/1c9f7c5567cf4af7f2c9aede1718e825803925": "cb87fbaeb0ea97edb32aff430fac5ca3",
".git/objects/02/5c8d2ad8d408765288c583e0fb5023753e9919": "904180060a654be0f7431d8f906913d0",
".git/objects/a3/2ca28e6a58df8d030e8423bb4ff2badeb81610": "abcb856172cf01028a09ed157bb9f3db",
".git/objects/a3/a44c0e0d2d2ed1cf42d2f9b540bdd6b7241cdd": "e2d6759c8ef2cee37e438537afc26de5",
".git/objects/a3/d2bf7382b6fe25b9c9ce8d513ca9f488ce73b3": "fb323425c36d9ca98d0c9216395a9206",
".git/objects/b5/7ba6037a7149f4cf24583636073ce5c97104cc": "0f841b43d5be641aa6c705a4a3125d28",
".git/objects/d9/83a40e9f5b10faf120588d6a7d566f7335f553": "206d1adb9be89bbe0cc48c63e370426e",
".git/objects/d9/4a152371a088170f33198dec3bd44a6e9e4747": "7c4681a048c70b2dce662980f2802b28",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/f251820f3bbd22756bd0046de7fc0239b66eb3": "b3a7e183cf7584fc376dc47f50880bb8",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/5ec0de3b81f32a9294739714fb8f0db9efb9d0": "d9f9d19373bf1488ba0d93a661c884c8",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/b4/77ddd0e34f0c9d7fa8d57a796b556a30aaecca": "195d14ae10787e559b195ee10547a591",
".git/objects/b4/e57eb6b13f04c9a2d31cb984031ea7b0aceab4": "349b4b470f0f9c64e216df1c74ca4686",
".git/objects/b4/21d5ec5a83bd6d1079b90864469385d3847ff2": "d5ebc20d5f6fd295814969c98b0d8e15",
".git/objects/a2/e05396b5198f28ae4e3ca6d7e575462f2f675a": "11de01e50d676b8211cceefc9baa4ce6",
".git/objects/a5/9e7e3703efa44c5e2b1b0c6587cb47dc4d35fb": "5141eb5d89b9e29e56128fefbe829ed9",
".git/objects/a5/5646b873637444c748603ffdb07a612f9404ba": "030156c1031c9682c7218b7bd1b83393",
".git/objects/a5/92e3bd9debb0ecdb11be561c3d7c73b21caab5": "010fba4948501280928e4a619d811995",
".git/objects/d1/2ef878f69c86f42bf3f83c1ec041941c0cfd52": "682b1b1d5baa8ed4716445663fe93b5a",
".git/objects/d1/c6eb0c400116d552b59536de99cf49d0dc060e": "100023bfd06539c43a11c44b092c61e0",
".git/objects/d1/63dc2cf9cbf370df9c5d9a58d69889f4b95c41": "9bf9a556c2e42d46d8df1fe16995ffec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a40872dd3a1eef3a9a286cc3c152470be58863": "b82caf0404263f00d25858cac0733b32",
".git/objects/bc/2c4f53091e44d62b6e7209bb4d0f5aece50499": "97b454eac2e4837e6514e6e814fc7424",
".git/objects/bc/d69ff4b02c8eb90e9f76e214b5d3800a5777d7": "3994c41356cf7bf366b51da8c1cc832f",
".git/objects/ae/be4a2324b5ed8ad61ca2c6659e7dc33042780a": "ce08f2a705a2126e8d44c71c52a9d59d",
".git/objects/ab/cb94cff078993e94ee209260b4c49063652b64": "394e5c4f5d3886181f6790534b98b6b1",
".git/objects/ab/9b56f5b442b89bb032cd61602a029a3a621da7": "72b386fd4cb23b08fc115254aba99dfc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/a20af429942fc9c3e32bde490c69b23ac6942d": "1970e1c93c7e0a0c1cd4fa67166497fc",
".git/objects/f3/e96496dda0dd5b2a6b41ea4374ec8113d9731b": "bf2c658d7dea5e929d9ee18533dbbe91",
".git/objects/f3/159f5821c234e11739da45282556336c5de9cc": "4e3c113f856f61dea620af23f29c152f",
".git/objects/f3/4c959980ef5933f0b82a20b25cde033c3dd34e": "42c3a7898ff421351137f3cfdedbb8f6",
".git/objects/f3/8679b8ab23718e00bb3b3829072d4d5f09ec76": "31a9c7dd712276e4980f3806eb8593ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/515380dd8e9c812eebb8452c2a55167b810d8e": "b39cbc2dca23b84e52db30a235d8fe85",
".git/objects/eb/42992e21414b96844381cd1c51da77e8e407f7": "d9d1b2a9dc64339fe6583380bdced6f9",
".git/objects/c7/1df945319e69485c11d7e1fc1ce72ea3a0c535": "026350a7fa79b139ba4f068b93d573e2",
".git/objects/ee/9c27716820adbbfb144c04b7e6cc73069b439e": "a852a75bb10ddf382957cf850a001322",
".git/objects/fc/5e9a864c4eadd1eb2f7b7796e8393f22e598a4": "4133aec3218862b45f06d11f77b870d5",
".git/objects/f5/8103b9c32d51f5ff07b71907e49d195c1b4729": "1335aa4081d84d4af540bf0fcfdd25ad",
".git/objects/e3/0ab5823504652f6150528e7423627521d423ec": "d2a56209370dc12a2f67af03d7b1680b",
".git/objects/ca/1bc270c72ff99f38e46ac11249583dcf2daf9e": "d431f8b7d72ad772358991a131f51a69",
".git/objects/ca/cdc551e42b8507cd7b10de3285678991740b9d": "ec7fbbc67fdfa45334145744b896b886",
".git/objects/ca/ee5fc9e7dbc912ef54e56074999b415195bd98": "449941ad27a949764699072823ce126a",
".git/objects/e4/1582b8063202e1d5511adc462c1af86283c4b4": "215207e92faa017d1e616f88ffaa61ef",
".git/objects/c8/479f9ad0315e9eb124ef2bd8e3ddee7f0e8b08": "2b4bc19c73a2f7d92982fc0984d028a6",
".git/objects/ed/dd4f0437d20454b0f2c30edd660e541e5f816a": "f377df8374b793fcdfdcb3bf668864e8",
".git/objects/ec/c7a07adef4c00db4b4b453a8dae4d7db78348f": "6a810aaeacfaeb2bc205b19cf6ca194a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/2168e1ee18f953e8d9c342c485f1cd7f068224": "be1e914125709379502068d5278702f4",
".git/objects/18/2be861930b6723b774a020f23c6efd99345d22": "84a52f0df4b4df259726779b4bd6716a",
".git/objects/18/cd59e82f64245cb3a498b3a280236c66850377": "0c2a20ca0eda296e6e31b0d86e1bcbea",
".git/objects/27/519f7d180b2d89bf57589050c0dc8be0b19907": "cdc019356d9628c74e311e4d8376f50c",
".git/objects/4b/cecd9713d6dc0a40c5acebad623b90d25c8e8e": "1484e187f2a6c09a5ee20626d9418eff",
".git/objects/4b/e420082ddd71680fe3c81ce45a4568949e1d1d": "d1f53164dd2127214069584f7875e3f5",
".git/objects/4b/6cc2de602f3ed3269c9a83bfc7932f3b55488f": "650ce1faded2d38f97d039059f87f0d6",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/813fda01ae98155526864c6926792a44f249c7": "1544e8a76e2a420ca966923a7e3a8445",
".git/objects/7c/1a316f916bacabb1a415f191f8aa0036424284": "e443fd9cfe00e9bed7760881b59ecbc6",
".git/objects/16/b0b1dff34bbe01a95b09bf4ba052f93b3d1eda": "f25b7b5719c740d2d0be0e16215a6ec8",
".git/objects/16/0d5d3cb6aab03b10dd48b7e99c7e6981ba41ff": "347aa98dfece552584673343b5390be3",
".git/objects/42/30d6acacf23cd498dbcdde62426b3be5f331c6": "afd0deddfde913d9df8387dec11821dc",
".git/objects/1f/23ca8e34c258e95bf8fe5bb7a3a9271ed91e46": "9e93cd7ef59ead90d2b92a1b1c5c7a72",
".git/objects/1a/497a554fd902f7b275f41086a0d012cb0e5780": "a78cfe53e0eb330f7e6231b5b947e337",
".git/objects/1a/59a49eaa6b9e2f10dc2f6350c821cd7cd0553e": "320dafac57ace082f979a4606066f219",
".git/objects/7b/48a7bf58dae1311db83218e407d331b86022e4": "52d47b9396b6a4e0df3440946df25789",
".git/objects/8a/c16ee51d83198ba1358a498e4b14936c0f5927": "0b9812959ab4d1edadd2739a5e88eca5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/bbbca5c554aa2e77d67e260f9199b4a6975ccc": "ef30edc08b5e82e6b177b864033b3c5b",
".git/objects/10/d4b1e4bec5b5ed956bf3dc01b22cd47573b6d3": "fa0f09fb06bebf4d05fd0c7b1f193d40",
".git/objects/10/78d2c4e0cd9e4edeb93c8678ea3927f02401e2": "5d299853ccc3a573050439cc42ea5922",
".git/objects/21/a6a0f1936e6638b82c60a2ef8eeef421b865d5": "34a580cc0d7c8d9215d6a8c035ccff6b",
".git/objects/4d/bf55c840b426ce326fb630359e38f81df8b0be": "014dd5dd69bd763a66f3c1c65601a1e9",
".git/objects/4d/7d18924aacc2868dbd0ef9048247b8658ec773": "9611ce3ac230ccb43cbf24e16feed037",
".git/objects/75/bb7715181102a791cfef36de9bb5191812240b": "56deb2460b31434b412dba3c44969cc3",
".git/objects/72/2f92d51dd2ddff09d1818b5aea5e334426896c": "66b8def1e2dba98fd1461a1659002296",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/3e4562c78fa717af5ee2619361a4ded1d053f2": "9df0397793d0e2e4865d21bb5a6536b8",
".git/objects/9f/22ac50f40cf9e83352121d3519c6fc84c2e1d7": "032d7df62fbe4fb0ef36df9ca1b76e1e",
".git/objects/9f/d1844b66396c3821ef3bb64296e051603a8161": "97f5b656e59e39710508bdb115e911fe",
".git/objects/6b/e6f9497e4835c66b9e10ead2780b7a93cb8862": "a9cba01d858caa0713659f1f36ef6a53",
".git/objects/07/ae636ff66af80bbb421f8303fb5e92807fd063": "4fadc36bb0455bf140615873f186e4f9",
".git/objects/6e/c1a734511b382c32917eb7ca405d9d467626a1": "a0ec2e06884739a341b89e565f6c3230",
".git/objects/6e/1243375ce2c2e1ebc374c68967b5c6b4de7cfd": "c74494c13b4ba60a580e426a0f1008b4",
".git/objects/5c/dc83b42dd7f29e62bb2f057bb48d6a1dd252f7": "bb9b343a8fc087f4b2adddc2660ce6a1",
".git/objects/09/7c1da87721add3e02be0fe13dafaaf136e7242": "384572b71b32bd2f9d693f0f744d36d5",
".git/objects/31/74627dd485a53bedc62bcac06b74d94954b5d5": "346b6ee80df157fd309d58202d921071",
".git/objects/65/d8fd24d92af3ace1dc9ab0d4a41ea58e3c7393": "8551a403bed1fee0cd35f04db7689aae",
".git/objects/65/da0325290b94947f8bc8a5266801834eb38dff": "6312ddb5392e6fe87d85b0c7db1d2467",
".git/objects/65/64405e997c7fc00ecab985a537b3709a270050": "034db902820c14bfe4368ce9f767867d",
".git/objects/3a/4879661f2c117401bb3189f0877ec413af7762": "a0474dfc5b3a64950499d1dedcde8fe1",
".git/objects/3a/4f0a74feb40bf16e0f22b59473a5876e134e9e": "2d8770b97259e7a41046b7a9e6cd37c0",
".git/objects/54/01ddfa5ef6ad380acb69281aa07ae49ada6136": "882d85cb658869bd4a159b494064fdf1",
".git/objects/54/b6fe7605d7dfb70ccfa9cb2f5caf2f1fe0f576": "fedf5918a0700aa9e137267d8f0d2673",
".git/objects/98/385cdeb738d9a2970d924301f1ca4b11ae7431": "c295241d05d0f19daae36bea1d3344ef",
".git/objects/3f/5218fc5025b05f6443f701635e97069ad6a68a": "6993640b2efc8af2dc2fb3f2c666bd3a",
".git/objects/3f/12ae5b9145af30111f02bfc5667ca7b56c05aa": "6c2ad4907abb726701d0c56d21218f1c",
".git/objects/5b/306cc9787964e9514a0fbf0f529016069db702": "7de098049b12b1f30f91a1d7f454746d",
".git/objects/6d/23f605eda5b1594706965fa997eb71f1b90349": "83cada5b06cb62f6667ecd02720e12a2",
".git/objects/6d/8b668c650a846a2075afed661a54289f9d2949": "6fb7a7c95191860ebb40bbb2bef78d94",
".git/objects/06/24f91abc2a7024f606a40d0c08b3eb3f0755b8": "882079a073c9cdb2e51744c989698a80",
".git/objects/6c/5116e38a179abf8e573322c00980246b28d706": "9d85c870fdf680f47544c9f8c34a466f",
".git/objects/6c/d749b7fe28241cd5e98319b314040cb4f063db": "05bef1a44e2fb2f3e17c0bd11145ed97",
".git/objects/39/fcd17cbbb27deee036c998db4bc2ac28954c19": "9747d4cd2bc63325c2edb2aa3d743ba5",
".git/objects/52/3882341a0cb582808c7b9766f6eb780ab729ba": "ac3a0f241157797ddc3635b25a96ec19",
".git/objects/52/b4126dc7fb30854045938c54bb6c8d59611e29": "f86b01b66c51917c3ae85a3ef5b868ef",
".git/objects/55/5cb1372fbfb2d64e8622f655a103d7de5ec54c": "73ff0bd0d73a7726a288ed26a20f8fb0",
".git/objects/97/adcc0be0bca36f2f3210988360c817d5d1666e": "0972f3417a80d9a16f8307ec0f761b23",
".git/objects/97/584506c65a1493cff89d0e855b6d5bda2922ea": "307a26af418768c04e71db9da1eded05",
".git/objects/0a/61658bd4515b73769440779a6421aaa29b6040": "da38a31e7f76b064668b12a21d70e30f",
".git/objects/bf/9e2646e4297d7a3bbfc74295a3bcee66c69842": "c01de6403d1869dbf723ed130d73ad99",
".git/objects/d4/7024a3f3c3bf218d4953efb4af50a661f4b48c": "461dcb0931b3f260989fda58fd3114f6",
".git/objects/a0/3b9ebb181754daf46996f2a4d4968b43555549": "73df825482eab90be2cf41853ae4537b",
".git/objects/a0/8358396e2f0f241e427e856b20d690b77d85a3": "0190ad5e226674c3dbdaa3323e5061e7",
".git/objects/a7/ae1b5a2e82d4e53d0b758e4fd875b6f1e85208": "f182e8a933f211847be9c845511d9f34",
".git/objects/a7/01a02890af2d073b717cb72b415b5e470b0d26": "4d03fbcfd23d7dff441ec2234839d0ad",
".git/objects/a7/67534033ffc9dec409f5b905103f5cc17878e2": "7101109f48838d49faa8a792b8ac724a",
".git/objects/dd/dfe9d1ad3f62034a1cfad301dc27a4f0fcdf87": "b3a45821ae16e4bd55acb25acff3a8c7",
".git/objects/dd/5f827bc7499ade670c45567fadc4e3a9540997": "2b1d02c5f0deddfbc2e90eb396e983ca",
".git/objects/b6/4903e9edfbf0d29e4ac130adc07b8892012bdc": "bce9977e929ac89041c172811f184126",
".git/objects/a9/4c006f5580c58bebc6488df44832b4b4ea1fe0": "452f99f7e4c690e423f914c0a60aadf3",
".git/objects/a9/fd2d31f14a8861b60ef64ca2be45a0e81f5b7f": "f0cc644040cd0f534880aed6739cc4f5",
".git/objects/a9/733ae8ce1df41267a3844f5ce4f77db8cff4a1": "00cbe76763682e9240eb7cc9fe94f8e4",
".git/objects/a9/9641b90c1363420e747ea50baa1fa3f434f900": "d662ae46e3d0837ae3639982a2e4fd6a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/f867baa7fb8cd6587d35deab58216d9410eed3": "8d34f513f1ce47f11bfd4b37cbeacb89",
".git/objects/aa/9e284353e00e4bef1762d20c4ba830144e60c6": "4674f5991fa6ed439ba003453c62f453",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fe691ba6c2e5b05ffe763d62317aa7ef3f14ab": "2c8e718b90a387d3e773dd0e5a41f5a2",
".git/objects/de/1cc99aacbdcb2c8e19ad01943521d5f7cae98d": "56416468ff7b08711574a7eb9d095d92",
".git/objects/de/a158643fb7b866069e6512e7b8f1e7ed1c30e8": "68b6e3db7a079ebe0dfd670b2c37ea9b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/c6324e4a778d2858b27fd554e37b207fd75ab9": "8ba12bf83937d1327f05b33357b66f2a",
".git/objects/b9/097ff0dd38851957bfdbd8bce83cb2abad4f44": "2ae14f2916766c4e6ee05b0ac614efee",
".git/objects/a1/e296d7d20822bdb537b9a0d6fdd642fd108352": "0d47a3fbfde51b4abca5d3c6ac8a3023",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/c78204b2d0aa661b431d55df198b310c9aa31b": "60854d3c103cdc49855ffb586c65e5e8",
".git/objects/ea/72ecc3a4f8dae79cfb1bff8f200fecbcfdd945": "0b20e66aa3c25249113f5b80e3f38ac0",
".git/objects/e1/f409ec3b44b70e1a09d2b938ea174a8ceb5ae7": "719099a509fa1d32e569d65ad9673a28",
".git/objects/e1/b5ff1451365f28ef1177b6b88fee65cd1940bd": "eaff90efbf0390e1f5b9e6a409556782",
".git/objects/cd/977155debfb248a88e0d73fde64bac58d9caa4": "95b5b044711f8a32234f00e6f29f4ad2",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/e276b3eca42f35829d163c7f096bba4282a385": "6e68dc8afd2c3dfd217f65361d174af9",
".git/objects/cc/6b3a9e5853bfc9e8a8783b0cf5c441eb38a7ed": "fe5ff74020da6f9e176ad8dd180a7f1d",
".git/objects/cc/9c2d70c369ad1afaa40b0bc244a74b4f15e6d6": "558163a47b0ef6a37ae3103a0d004896",
".git/objects/e6/984bb943d7c67a2c4096b9b177dd16324596c0": "612fe4b872d5dedcbc2c31a8f09dcd04",
".git/objects/f0/bfe053298582b5565fe23ccaef3f0857645675": "fd9deff273cf541f789dd60b6c9d3009",
".git/objects/f0/df8689431c82af5e30986a4f9321d387cad08a": "0a5f4aa44868f509036d4df7b41898b9",
".git/objects/f7/d03d25b7491bd4fb4e7b5d2368b84d3728dfaf": "3d8085b4910857fd2c273ba4552232b9",
".git/objects/fa/c6a30b7f5468bd482c78458352547b67afe647": "6defd78ef6bc64fbda60e008980e9e2b",
".git/objects/fa/37cf011e40ae608a1d809316a2ec296c9f1cd8": "2db9cfaf5cd4c83715de7f7969183452",
".git/objects/ff/921452ad4b3319be90921636d5882a719bd9a1": "d843dd068e8ecf335bf53ff00eeb19d2",
".git/objects/c5/7115c040b2f6c9c2f12685ac104c61027908be": "44beedfcfd8b7f25a7b24dc4664c4fa3",
".git/objects/f6/f76e892bde981e354c78ffd1e2c8f87cb99321": "55d8da7bead7165a766650be200ed4e9",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/ad3e1c4d3d2f20ded0a4c9e808009711c78296": "cca98c25b8fa12a5c686c8c22ca83e51",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e7/7883d59e5720156cdd0192479b45454a168963": "20d4c3cf2121be8147666e2317a6c3b6",
".git/objects/cb/1977b28cd1dfed3beacd6ec705484cd8f0c6a4": "bca47dc0e6aa9c9da323d216fd69099a",
".git/objects/f8/74db8a0d9ae57990bf273fafb9d39dc9626fd2": "40db397c401418283a722da846607ca7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/9cd81f8ca4820f1e4fa040aa42d8ec5ccbbaac": "45cd06421b3fec079f9533d556c2618e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/ac0b462f46ccf3eaf1282462d1c3edd2987bab": "019e589c458d6e48161929d17a56dd9e",
".git/objects/83/3f20cdd3afa1a49b19ee976538633abc4ff8c9": "7afcc876a9ec267de05a0ba48cb5fc63",
".git/objects/1b/1d435cd7a7c1e9e74cb06dc1f4ed50701fd53b": "0ed82a87b2a96c0e0e9750577b6980b3",
".git/objects/77/5960dd750c8e49336c49cf61d3ba67c8f0bd13": "3a3a2bf790aa22f1d24cfdddb8509674",
".git/objects/77/b99b0c55f67e8a228f0e12efeccbd58350cf01": "433466c8d5fab330346a1bbedab14e77",
".git/objects/70/26f742a422365190e326ce85106641bd556149": "3dc60a7a0621edc8fc8fd008a675ee79",
".git/objects/70/ed99d35513c6cc99d8b6cee5ebee46276af64a": "f9995db0a1e6a6b71cceea0be24228f2",
".git/objects/1e/79b90e6713e3886127f9aaf180f9db1a2a57cf": "c3fceee7f04764e215a02956b2b84ae6",
".git/objects/1e/a2e56da03fcd74ea9b3246e19995fa28aa2edd": "b55d80bf0c5150171dabab1061f67f2e",
".git/objects/4a/a4807074f032e7b013d5f3ec6edc5c32c044a6": "a17b9ee5aafe1f9fadc5c07cf5a63461",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/2b1f114869b51692f9b6b350826d0315bd9562": "df882cd2c576dd2b705f2de00d8ad8da",
".git/objects/15/e7b42905652a1b063d24cf49470a2af7cdf068": "2dc3b5b0882ebbf1c0f0882d01d2563c",
".git/objects/15/8d568c137b41934ebded02054dc1bd6840b2bb": "105c12c79edcf701a88c2897eba1fcbf",
".git/objects/15/6ca3128e869d6164b340569520f272ac52d53d": "84e71a95057d304f9d61d962142c6a81",
".git/objects/12/8c18dfffbb0097aa3f60bf622302fd7adc37e9": "612fcec0979273d6286e59da59a3d2b2",
".git/objects/8c/2cc932aea2c87b9b7b92de7a459b06ac8f43f8": "94a0d0f22bfa5d36f6d0956c54617822",
".git/objects/8c/1cc4488ba3aac5468e9f996986ea7489b82389": "1a444c9c81a76e62aaf5c62c52ab1c91",
".git/objects/85/02922693320bf27b4a7fd620293fa04f8f539d": "d9b9d2ade826a27e059ab6b19a3a7022",
".git/objects/76/53cb76c8f91a708ae672d45b7ce680cfcdcbd4": "96ba79019b5127cba7da35a9f41f875e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/8c34fbcbc240a2c4f2c21b4170726b37f4359d": "00396fc7550ecd060ab0d22e324af553",
".git/objects/82/33f5ebef3aa1f458f6d092f2ec2620d0bbf4b6": "8f612310350c8dcf3ba812dadfcaba0f",
".git/objects/82/c899902ad8cd1afa812cc8d405548b17516b79": "8539dafa612dada072cbce12f7a3db65",
".git/objects/49/873d7b848697261d349ecd3e860d66555ddddb": "27bf833006c6e5859f49ff24e0a6c752",
".git/objects/40/380daae7b2005aeaa70c2e5d41b4eb1cdae9f9": "0c24cb9b2434f97cb5afe9f5954915df",
".git/objects/40/ee18335d7444519c1d8e6f898e8125d5d6be80": "e1487f5376693062adf5a51ce5895563",
".git/objects/2e/a8647aaab7b77234ce292fa0b4821d803d7486": "fbd1f00958726bf6a58421d5f1c72f02",
".git/objects/2e/56e11359b9e1b8ec6a1b2a74776dd3639134d2": "097b31abb048aae76e23dceb2e6f7e0d",
".git/objects/2b/4e9dc6c2a68fbabc719dfdb63570a989a4f86a": "f43a270f58752a13657703f12fe97272",
".git/objects/2b/0533daa5976afd35b936443de86bd4a4e119c2": "5ed42354af77ea266ad1a056e402e9a1",
".git/objects/47/983f05d3f77174c0ea00f06d684ee9f39c187f": "ea60fe5cf0bc0dc756e1180a07406320",
".git/objects/13/e8629f22d71dbf47709b97a1aceb47e8b9c222": "2a68fa7b81a1b7ba9b6d9047530cff2b",
".git/objects/13/689d43993e41eb1ed79fb155b53038cb71f49c": "6c4e11f5d1b0c888c220009c26caabdd",
".git/objects/7f/c0c831bbc7bafa9a2f55b9eafec7cb14947454": "9c89e9c02eb9fba2fe76150d946ed457",
".git/objects/7f/2422fab2ebd2dfae242a8547e924d3d658a05a": "654a54418f295033426aa84974efa89d",
".git/objects/7f/24af304a53404fa4462800eeb7d217340ef118": "31eb61f3dcd295a540fb320eff84b6b9",
".git/objects/7a/e75c6cfd9f915c44bbaa4af0ae489d28114dca": "2773a4543da6d549a640ee1c6f11e9b2",
".git/objects/14/858e52c2b17fe46be5f81839b18fa2ff2e4885": "4b6fd6d027f337eab3ab9c0e811d05ac",
".git/objects/25/df3bc21bce6383638bbfe4209e89a4c629f141": "8c0e835884609a88f65d967258e0571e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5632c48c7a3db8403595f7cc9b2e468d",
".git/logs/refs/heads/main": "5632c48c7a3db8403595f7cc9b2e468d",
".git/logs/refs/remotes/origin/HEAD": "b36f841af4a9a20360c186769063f9bf",
".git/logs/refs/remotes/origin/main": "66de5f12e3cd7c62b65c22973294b934",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "63fa003a7518024e520d26d33b530bce",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "63fa003a7518024e520d26d33b530bce",
".git/index": "fdc2791c13153dfe8e6f0495282f4245",
".git/packed-refs": "e16adc5bb7e2f06f05b5b95c33a0b932",
".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
"assets/AssetManifest.json": "b10d6ccbd940c6d87c6ecc46013caf10",
"assets/NOTICES": "2578b3f782dac3f1ccea7428df2616bc",
"assets/FontManifest.json": "28e61baedf2d55141be8163684a05d56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ui_library/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/packages/ui_library/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/packages/ui_library/fonts/StIcons.ttf": "630ab2346334b8028a0662016f38fb2c",
"assets/packages/ui_library/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/packages/ui_library/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/packages/ui_library/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/packages/ui_library/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/logo.png": "e383e2f78e87564248888bb0276a799b",
"assets/assets/web_background.jpg": "70f0b27d6262a246395c6ed1ae9e0bbe",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
