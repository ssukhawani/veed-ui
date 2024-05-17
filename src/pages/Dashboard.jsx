import ButtonsList from "@/components/ButtonList";
import Header from "@/components/Header";
import ProjectCardsList from "@/components/ProjectCardList";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="font-inter w-full relative bg-white flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="h-screen w-full overflow-hidden bg-whitesmoke-100 self-stretch flex flex-row items-start justify-start max-w-full text-center text-[0.813rem] text-gray-100 font-inter mq1150:pl-[1.25rem] mq1150:pr-[1.25rem] mq1150:box-border ">
        <Sidebar />
        <main className="relative overflow-x-hidden mq1150:ml-0 ml-64 flex-1 flex flex-col pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
          <div className="flex flex-col gap-[0.5rem] max-w-full">
            <div className="w-full self-stretch flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[2.687rem] box-border text-lightslategray">
              <Header />
            </div>
            <div className="ml-[2.5rem] mq800:ml-0">
              <div className="flex-1 flex flex-col gap-[1rem] mq800:gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start gap-[0.75rem] text-left text-[1.5rem] text-gray-100 font-inter">
                  <div className="flex flex-row items-start justify-start pt-[0.062rem] pb-[0rem] pr-[0.062rem] pl-[0rem]">
                    <span className="font-medium m-0 relative text-inherit tracking-[-0.12px] leading-[1.75rem] mq450:text-[1.188rem] mq450:leading-[1.375rem]">
                      Let&apos;s create some <span className="font-bold">videos!</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col w-full items-start gap-[1.25rem] mq800:flex-wrap">
                  {/* Create videos */}
                  <ButtonsList />

                  {/* My recent videos */}
                  <div className="w-full mt-[1.25rem]">
                    <div className="flex w-full justify-between">
                      <div className="relative leading-[1.25rem] text-[15px] font-medium">
                        Recent Videos
                      </div>
                      {/* All videos button */}
                      <div className="flex flex-col items-end justify-start gap-[17.656rem] text-center text-[0.813rem] text-slategray">
                        <div className="rounded-lg flex flex-row items-start justify-start p-[0.5rem] gap-[0.243rem]">
                          <div className="cursor-pointer relative leading-[1rem] font-medium inline-block min-w-[3.875rem]">
                            All Videos
                          </div>
                          <img
                            className="h-[1rem] w-[1rem] relative min-h-[1rem]"
                            alt=""
                            src="/frame-22.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <ProjectCardsList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Dashboard;
