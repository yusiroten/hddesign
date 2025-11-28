
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Home, Briefcase, Building2, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Home,
    title: 'Desain Interior Rumah',
    description: 'Menciptakan hunian yang nyaman, elegan, dan sesuai dengan gaya hidup keluarga Anda.',
    image: { src: 'https://i.ibb.co/Zpqqd62W/IMG-20250818-WA0417.jpg', alt: 'Interior rumah modern', hint: 'modern living room' },
    details: [
      'Di HD Design, kami memahami bahwa rumah adalah cerminan pribadi dari setiap penghuninya. Ini bukan hanya tempat untuk beristirahat, tetapi juga ruang di mana kenangan diciptakan. Oleh karena itu, kami mendedikasikan diri untuk merancang interior rumah yang tidak hanya indah secara visual, tetapi juga fungsional dan selaras dengan kepribadian serta gaya hidup Anda. Kami percaya bahwa desain yang baik mampu meningkatkan kualitas hidup, menciptakan suasana yang hangat, dan memberikan kenyamanan maksimal bagi seluruh anggota keluarga.',
      'Proses kami dimulai dengan mendengarkan Anda. Kami ingin memahami impian, kebutuhan, dan preferensi Anda secara mendalam. Dari konsultasi awal, kami mengembangkan konsep desain yang unik dan personal. Setiap elemen, mulai dari tata letak ruang, pemilihan palet warna, hingga pencahayaan, kami pertimbangkan dengan cermat untuk memastikan setiap sudut rumah Anda memiliki cerita dan fungsi yang optimal. Kami menggabungkan estetika modern dengan sentuhan personal untuk menciptakan ruang yang benar-benar terasa seperti "rumah".',
      'Kami mengutamakan penggunaan material berkualitas tinggi yang tidak hanya tahan lama tetapi juga ramah lingkungan. Tim kami bekerja sama dengan pemasok tepercaya untuk memastikan setiap furnitur, kain, dan material finishing memenuhi standar tertinggi. Detail adalah kunci dalam pekerjaan kami. Dari jahitan pada bantal sofa hingga pemasangan presisi panel dinding, kami memastikan setiap detail dieksekusi dengan sempurna untuk menghasilkan kualitas akhir yang memuaskan dan membanggakan.',
      'Portofolio kami mencakup berbagai gaya desain, mulai dari minimalis modern, Skandinavia yang hangat, hingga klasik yang mewah. Apakah Anda ingin merombak total seluruh rumah atau hanya ingin menyegarkan tampilan ruang tamu, tim kami siap membantu mewujudkan visi Anda menjadi kenyataan. Biarkan kami membantu Anda menciptakan hunian impian yang tidak hanya indah dipandang, tetapi juga nyaman untuk ditinggali setiap hari.'
    ]
  },
  {
    icon: Building2,
    title: 'Desain Interior Villa',
    description: 'Desain eksklusif untuk villa peristirahatan Anda, memadukan kemewahan dan alam.',
    image: { src: 'https://i.ibb.co/5WgDgWmL/IMG-20250818-WA0421.jpg', alt: 'Villa mewah dengan pemandangan alam', hint: 'luxury villa' },
    details: [
      'Villa bukan sekadar properti, melainkan sebuah destinasi peristirahatan pribadi yang menawarkan pelarian dari hiruk pikuk kehidupan sehari-hari. Kami di HD Design berspesialisasi dalam menciptakan desain interior villa yang eksklusif, di mana kemewahan berpadu serasi dengan keindahan alam sekitarnya. Tujuan kami adalah merancang sebuah surga pribadi yang memanjakan semua indra, memberikan ketenangan, dan menawarkan pengalaman menginap yang tak terlupakan bagi Anda dan tamu Anda.',
      'Setiap proyek desain villa kami awali dengan riset mendalam terhadap lokasi dan pemandangan di sekitarnya. Kami percaya bahwa desain interior villa yang sukses harus mampu "membawa masuk" keindahan eksterior ke dalam ruangan. Kami memaksimalkan penggunaan jendela besar, teras terbuka, dan material alami seperti kayu dan batu untuk menciptakan koneksi yang kuat antara ruang dalam dan luar. Konsep desain kami selalu disesuaikan untuk menonjolkan keunikan lokasi, baik itu pemandangan laut, pegunungan, maupun taman tropis.',
      'Kemewahan dalam desain kami tidak hanya terlihat dari penampilan, tetapi juga terasa dari pengalaman. Kami memilih furnitur yang dirancang khusus, karya seni yang dikurasi, dan sistem pencahayaan canggih untuk menciptakan suasana yang elegan dan nyaman. Fasilitas seperti kolam renang pribadi, area spa, atau home theater kami integrasikan secara mulus ke dalam desain, memastikan setiap aspek villa Anda dirancang untuk relaksasi dan hiburan tingkat tinggi.',
      'Kami memahami bahwa villa seringkali menjadi investasi jangka panjang. Oleh karena itu, kami tidak hanya fokus pada estetika, tetapi juga pada fungsionalitas dan kemudahan perawatan. Dari pemilihan material yang tahan cuaca hingga tata letak yang efisien, kami memastikan villa Anda tidak hanya indah, tetapi juga praktis dan bernilai tinggi. Percayakan pada kami untuk mengubah villa Anda menjadi sebuah mahakarya arsitektur interior yang memancarkan kemewahan, kenyamanan, dan keharmonisan dengan alam.'
    ]
  },
  {
    icon: Briefcase,
    title: 'Desain Interior Kantor',
    description: 'Ruang kerja yang produktif, representatif, dan meningkatkan semangat tim.',
    image: { src: 'https://i.ibb.co/9HSgM2p4/IMG-20250818-WA0425.jpg', alt: 'Ruang kerja kantor modern dan kolaboratif', hint: 'modern office' },
    details: [
      'Lingkungan kerja memiliki dampak langsung terhadap produktivitas, kreativitas, dan kesejahteraan karyawan. Di HD Design, kami merancang ruang kantor yang lebih dari sekadar tempat bekerja. Kami menciptakan ekosistem yang dirancang untuk menginspirasi kolaborasi, mendorong inovasi, dan mencerminkan identitas serta budaya perusahaan Anda. Sebuah kantor yang dirancang dengan baik adalah aset strategis yang mampu menarik talenta terbaik dan meningkatkan semangat kerja tim.',
      'Pendekatan kami dalam desain interior kantor berpusat pada manusia (human-centric). Kami menganalisis alur kerja, kebutuhan fungsional setiap departemen, dan tujuan bisnis Anda. Hasilnya adalah desain yang fleksibel dan adaptif, menyediakan beragam pilihan ruang kerja—mulai dari area kerja terbuka yang dinamis, ruang fokus yang tenang, hingga area kolaboratif informal. Kami memastikan setiap meter persegi kantor Anda dimanfaatkan secara efisien untuk mendukung berbagai aktivitas kerja.',
      'Identitas merek adalah elemen kunci dalam desain kantor kami. Kami mengintegrasikan logo, warna korporat, dan nilai-nilai perusahaan ke dalam desain interior secara halus namun kuat. Ini tidak hanya menciptakan ruang yang representatif saat menerima klien, tetapi juga membangun rasa memiliki dan kebanggaan di antara karyawan. Dari lobi yang mengesankan hingga pantry yang nyaman, setiap area kami rancang untuk menceritakan kisah sukses perusahaan Anda.',
      'Kesejahteraan karyawan adalah prioritas. Kami menerapkan prinsip-prinsip desain biofilik dengan memasukkan elemen alam, pencahayaan alami yang optimal, dan sirkulasi udara yang baik. Area rekreasi, ruang istirahat yang nyaman, dan furnitur ergonomis adalah standar dalam proyek kami. Kami percaya bahwa kantor yang sehat dan nyaman akan menciptakan tim yang bahagia, termotivasi, dan pada akhirnya lebih produktif. Mari berpartner dengan kami untuk menciptakan ruang kerja generasi baru bagi perusahaan Anda.'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Konsultasi Desain',
    description: 'Dapatkan saran ahli untuk proyek renovasi atau penataan ulang ruang Anda.',
    image: { src: 'https://i.ibb.co/xqg168Bh/IMG-20250818-WA0430.jpg', alt: 'Seorang desainer interior sedang berkonsultasi', hint: 'design consultation' },
    details: [
      'Terkadang, Anda tidak memerlukan perombakan desain secara menyeluruh, tetapi hanya butuh panduan dan saran ahli untuk menyegarkan atau mengoptimalkan ruang yang ada. Layanan Konsultasi Desain kami hadir untuk memberikan solusi cepat, praktis, dan profesional bagi Anda yang ingin melakukan renovasi skala kecil, penataan ulang furnitur, atau sekadar membutuhkan pendapat kedua mengenai ide-ide desain Anda.',
      'Sesi konsultasi kami bersifat fleksibel dan dapat disesuaikan dengan kebutuhan Anda. Apakah Anda bingung memilih palet warna yang tepat untuk kamar tidur? Atau mungkin Anda kesulitan menentukan tata letak furnitur yang paling efisien di ruang keluarga? Tim desainer ahli kami siap mendengarkan tantangan Anda, memberikan analisis ruang, dan menawarkan solusi kreatif yang dapat langsung Anda terapkan. Kami memberikan panduan praktis mengenai pemilihan material, pencahayaan, hingga aksesori dekoratif.',
      'Layanan ini sangat ideal bagi Anda yang memiliki anggaran terbatas atau lebih suka terlibat langsung dalam proses pengerjaan (DIY), namun tetap menginginkan sentuhan profesional. Kami akan membekali Anda dengan pengetahuan, ide, dan rekomendasi vendor tepercaya, sehingga Anda dapat membuat keputusan yang lebih baik dan menghindari kesalahan yang memakan biaya. Anggap kami sebagai partner desain Anda yang siap memberikan arahan strategis kapan pun dibutuhkan.',
      'Melalui sesi konsultasi, Anda akan mendapatkan ringkasan konsep, mood board, atau sketsa tata letak, tergantung pada cakupan yang disepakati. Tujuan kami adalah memberdayakan Anda dengan wawasan desain profesional, sehingga Anda dapat melanjutkan proyek dengan lebih percaya diri. Jadwalkan sesi konsultasi dengan HD Design hari ini dan ambil langkah pertama untuk mengubah ruang Anda menjadi lebih baik dengan panduan dari para ahli.'
    ]
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Layanan Kami</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Kami menawarkan rangkaian lengkap layanan desain interior untuk memenuhi setiap kebutuhan proyek Anda.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="text-center bg-background border-border hover:border-primary hover:shadow-lg transition-all transform hover:-translate-y-2 cursor-pointer flex flex-col overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={service.image.hint}
                    />
                  </div>
                  <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[650px] bg-card">
                <DialogHeader>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={service.image.hint}
                        className="rounded-lg"
                      />
                  </div>
                  <DialogTitle className="text-primary text-2xl">{service.title}</DialogTitle>
                  <DialogDescription asChild>
                    <div className="text-muted-foreground text-sm space-y-4 text-justify max-h-[40vh] overflow-y-auto pr-4">
                      {service.details.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
