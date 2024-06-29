import Modal from "@/components/ui/Modal";
import Image from "next/image";
import axios from "axios";

const DeleteToolConfirmModal = ({ isOpen, setOpen, toolToDelete }) => {
	const deleteToolHandler = async () => {
		await axios.delete(`/api/events?eventId=${toolToDelete.event_id}`);
		setOpen(false);
		location.reload();
	};

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-4xl">
					<i className="fa-solid fa-trash"></i>
				</div>
			}
			title={"Delete Event"}
			content={
				<div>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							await deleteToolHandler();
						}}
					>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-4 mb-4">
								<p className="text-3xl font-semibold text-dark-600">{toolToDelete.event_name}</p>
							</div>

							<img src={toolToDelete.thumbnail} alt={toolToDelete.event_name} className="rounded-md h-[95px]" />

							<p className="text-sm text-dark-600 mt-4">Organised by: {toolToDelete.organiser_name}</p>
						</div>

						<p className="text-sm font-semibold text-center mt-10">Are you sure you want to delete this event?</p>

						<div className="flex justify-end">
							<button
								type="submit"
								className="flex items-center mt-10 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-error-600 hover:bg-error-700 text-light-100"
							>
								Delete
								<span className="ml-6 text-lg">
									<i className="fa-solid fa-arrow-right-long"></i>
								</span>
							</button>
						</div>
					</form>
				</div>
			}
			onClose={() => {
				setOpen(false);
			}}
		></Modal>
	);
};

export default DeleteToolConfirmModal;
