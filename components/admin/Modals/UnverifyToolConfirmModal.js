import Modal from "@/components/ui/Modal";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
const UnverifyToolConfirmModal = ({ isOpen, setOpen, toolToUnverify }) => {
	const verifyToolHandler = async () => {
		await axios.patch(`/api/events?eventId=${toolToUnverify.event_id}&verify=false`);
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
			title={"Unverify Event"}
			content={
				<div>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							await verifyToolHandler();
						}}
					>
						<div className="flex flex-col justify-center items-center">
							<div className="flex justify-center items-center gap-x-4 mb-4">
								<p className="text-3xl font-semibold text-dark-600">{toolToUnverify.event_name}</p>
							</div>

							<img className="h-[95px] rounded-md" src={toolToUnverify.thumbnail} alt={toolToUnverify.event_name} />

							<p className="text-sm text-dark-600 mt-4">Organised by: {toolToUnverify.organiser_name}</p>
						</div>

						<p className="text-sm font-semibold text-center mt-10">Are you sure you want to unverify this event?</p>

						<div className="flex justify-end">
							<button
								type="submit"
								className="flex items-center mt-10 -mb-6 px-6 py-2 text-sm font-primary font-bold rounded-md bg-error-600 hover:bg-error-700 text-light-100"
							>
								Unverify
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

export default UnverifyToolConfirmModal;
