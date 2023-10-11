import { setShowFeedback } from '@sp-store/Feedback';
import { useAppSelector, useAppDispatch } from '@store';
import { IPropsFeedBackHandler, IFieldsFeedback } from '@sp-interfaces';
import { Input } from 'antd';
import Modal from 'antd/es/modal/Modal';

const UseFeedBackHandler = ({ children }: IPropsFeedBackHandler) => {
  const { show, value } = useAppSelector((state) => state.Feedback);
  const dispatch = useAppDispatch();
  const setShow = (show: boolean) => {
    dispatch(setShowFeedback(show));
  };

  return (
    <>
      {children}
      <Modal
        zIndex={1000000000000}
        open={show}
        onCancel={() => setShow(false)}
        okButtonProps={{ className: 'bg-primary' }}
      >
        <h1 className="uppercase border-b mb-4">{value?.topic}</h1>
        <div className="flex flex-col gap-4 max-h-96 pt-2 overflow-auto">
          {value?.questions?.map((question: IFieldsFeedback) => {
            const { title, description, score } = question;
            return (
              <div
                className="flex flex-col gap-2 p-4 pb-6 border rounded relative"
                key={title}
              >
                <h2 className="font-extralight absolute -top-3 left-4 bg-background text-primary">
                  {title}
                </h2>
                {!!description && (
                  <p className="pl">
                    <span className="font-bold">Description: </span>
                    {description}
                  </p>
                )}
                <Input.TextArea showCount maxLength={300} />
                {!!score && (
                  <div className="mt-6 flex gap-2 justify-between items-center">
                    <h4 className="font-bold min-w-fit">
                      Give an score about this topic from one to 10:
                    </h4>
                    <Input className="w-full"></Input>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default UseFeedBackHandler;
