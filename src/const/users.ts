const USERS = [
  {
    id: "emiu",
    name: "Emiuu - Chicken 🐥",
    images: [
      "/resources/emiu/chicken1.png",
      "/resources/emiu/chicken2.png",
      "/resources/emiu/chicken3.png",
      "/resources/emiu/chicken4.png",
    ],
    message:
      "Chúc em một ngày “20/10” đầy ý nghĩa, em xứng đáng với tất cả những điều tốt đẹp. Chúc em luôn rạng rỡ, mạnh mẽ và sống đúng với điều khiến em thấy hạnh phúc nhất. 🌺♥️",
  },
  {
    id: "meiu",
    name: "Mẹ yêu 🌸",
    images: ["/resources/meiu/meiu1.png", "/resources/meiu/meiu2.png"],
    message:
      "Chúc mẹ yêu của con một ngày 20/10 thật nhiều niềm vui, sức khỏe và hạnh phúc. Cảm ơn mẹ đã luôn là điểm tựa vững chắc và là người phụ nữ tuyệt vời nhất trong cuộc đời con 💐",
  },
  {
    id: "hoannt",
    name: "Chị Hoàn 👩‍💼",
    images: [
      "/resources/hoannt/hoannt1.png",
      "/resources/hoannt/hoannt2.png",
      "/resources/hoannt/hoannt3.png",
      "/resources/hoannt/hoannt4.png",
    ],
    message:
      "Chúc chị luôn mạnh mẽ, bản lĩnh và giữ vững tinh thần lãnh đạo đầy truyền cảm hứng. Chúc chị luôn xinh đẹp, hạnh phúc và thành công trên mọi hành trình! 💐",
  },
  {
    id: "hoant",
    name: "Chị Hoa 🌸",
    images: [
      "/resources/hoant/hoant1.png",
      "/resources/hoant/hoant2.png",
      "/resources/hoant/hoant3.png",
      "/resources/hoant/hoant4.png",
    ],
    message:
      "Cảm ơn chị đã luôn là “người lan tỏa năng lượng tích cực”, chăm sóc từng thành viên và giữ vững tinh thần đoàn kết trong công ty. Chúc chị luôn xinh đẹp, rạng rỡ, và nhận được thật nhiều yêu thương — không chỉ trong ngày hôm nay mà là mỗi ngày! 💐",
  },
  {
    id: "anhpm",
    name: "Minh Anh 🌼",
    images: [
      "/resources/anhpm/anhpm1.png",
      "/resources/anhpm/anhpm2.png",
      "/resources/anhpm/anhpm3.png",
      "/resources/anhpm/anhpm4.png",
    ],
    message:
      'Chúc Minh Anh luôn xinh đẹp, vui vẻ và tràn đầy cảm hứng sáng tạo. Cảm ơn vì luôn mang lại những "content thú vị" và "năng lượng tích cực" cho mọi người. Chúc Minh Anh một ngày 20/10 thật ý nghĩa và nhiều niềm vui! 💐',
  },
  {
    id: "vanlt",
    name: "Thảo Vân 🌷",
    images: [
      "/resources/vanlt/vanlt1.png",
      "/resources/vanlt/vanlt2.png",
      "/resources/vanlt/vanlt3.png",
      "/resources/vanlt/vanlt4.png",
    ],
    message:
      "Cảm ơn Thảo Vân vì đã luôn mang đến những chiến dịch truyền cảm hứng và giúp thương hiệu ngày càng tỏa sáng. Chúc Thảo Vân luôn xinh đẹp, “viral” trong công việc, “trend” trong phong cách và “happy” trong cuộc sống! 💖",
  },
  {
    id: "nhunq",
    name: "Chị Như 🌻",
    images: [
      "/resources/nhunq/nhunq1.png",
      "/resources/nhunq/nhunq2.png",
      "/resources/nhunq/nhunq3.png",
      "/resources/nhunq/nhunq4.png",
    ],
    message:
      'Chúc chị 20/10 thật vui và đầy năng lượng! Cảm ơn chị vì luôn là người đứng sau "những chuyến đi trọn vẹn" — vừa lo chu đáo, vừa truyền cảm hứng và tạo nên bao kỷ niệm đẹp cho mọi người. Chúc chị luôn rạng rỡ, vui vẻ và hạnh phúc trên mọi hành trình 💐',
  },
  {
    id: "hientt",
    name: "Chị Hiền 🌺",
    images: [
      "/resources/hientt/hientt1.png",
      "/resources/hientt/hientt2.png",
      "/resources/hientt/hientt3.png",
      "/resources/hientt/hientt4.png",
    ],
    message:
      'Chúc chị 20/10 thật vui và đầy năng lượng! Cảm ơn chị vì luôn là người đứng sau "những chuyến đi trọn vẹn" — vừa lo chu đáo, vừa truyền cảm hứng và tạo nên bao kỷ niệm đẹp cho mọi người. Chúc chị luôn rạng rỡ, vui vẻ và hạnh phúc trên mọi hành trình 💐',
  },
  {
    id: "uyennp",
    name: "Phương Uyên 🌹",
    images: [
      "/resources/uyennp/uyennp1.png",
      "/resources/uyennp/uyennp2.png",
      "/resources/uyennp/uyennp3.png",
      "/resources/uyennp/uyennp4.png",
    ],
    message:
      "Cảm ơn sự chăm chỉ, âm thầm nhưng đầy trách nhiệm của Phương Uyên đã giúp mọi thứ luôn “vào guồng” ổn định. Chúc Phương Uyên luôn được yêu thương, hạnh phúc, và luôn tỏa sáng trong mọi vai trò mình đảm nhận! 🌷",
  },
  {
    id: "nhungnh",
    name: "Chị Nhung 🌷",
    images: [
      "/resources/nhungnh/nhungnh1.png",
      "/resources/nhungnh/nhungnh2.png",
      "/resources/nhungnh/nhungnh3.png",
      "/resources/nhungnh/nhungnh4.png",
    ],
    message:
      "Cảm ơn sự chăm chỉ, âm thầm nhưng đầy trách nhiệm của chị đã giúp mọi thứ luôn “vào guồng” ổn định. Chúc chị luôn được yêu thương, hạnh phúc, và luôn tỏa sáng trong mọi vai trò mình đảm nhận! 🌺",
  },
  {
    id: "huyenht",
    name: "Chị Huyền 🌼",
    images: [
      "/resources/huyenht/huyenht1.png",
      "/resources/huyenht/huyenht2.png",
      "/resources/huyenht/huyenht3.png",
      "/resources/huyenht/huyenht4.png",
    ],
    message:
      "Cảm ơn mọi nỗ lực và năng lượng tích cực mà chị đã mang đến và lan tỏa tinh thần “máu lửa” trong công ty! Chúc chị luôn xinh đẹp, tự tin và gặt hái thật nhiều thành công trong cả công việc lẫn cuộc sống. 💐",
  },
  {
    id: "kieult",
    name: "Chị Kiều 🌹",
    images: ["/resources/kieult/kieult1.png"],
    message:
      "Cảm ơn chị vì những ngày dài làm bạn với “sổ sách” mà vẫn luôn nhẹ nhàng và tươi tắn! Chúc chị lúc nào cũng “cân bằng hoàn hảo” giữa công việc và cuộc sống, giữa những con số khô khan và nụ cười ấm áp 💕",
  },
  {
    id: "minhnn",
    name: "Nhật Minh 🌷",
    images: ["/resources/minhnn/minhnn1.png"],
    message:
      "Cảm ơn Nhật Minh vì những ngày dài làm bạn với “sổ sách” mà vẫn luôn nhẹ nhàng và tươi tắn! Chúc Nhật Minh lúc nào cũng “cân bằng hoàn hảo” giữa công việc và cuộc sống, giữa những con số khô khan và nụ cười ấm áp 💕",
  },
  {
    id: "chungnq",
    name: "Quốc Chung 🌷",
    images: [
      "/resources/chungnq/chungnq1.png",
      "/resources/chungnq/chungnq2.png",
      "/resources/chungnq/chungnq3.png",
      "/resources/chungnq/chungnq4.png",
    ],
    message:
      'Chúc Quốc Chung một ngày 20/10 thật rực rỡ và nhiều cảm hứng — như chính "những bản thiết kế" đầy sáng tạo của mình! Chúc Quốc Chung luôn tự tin, hạnh phúc và tiếp tục tỏa sáng theo cách rất riêng của mình 💫🎨',
  },
];

export default USERS;
